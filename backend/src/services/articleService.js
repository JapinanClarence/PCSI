import Article from "../models/Article.js";
import { getCloudinaryPublicId } from "../utils/getPublicId.js";
import cloudinary from "../config/cloudinaryConfig.js";
import mongoose from "mongoose";

const articleService = {
  createArticle: async (
    volumeNo,
    seriesNo,
    month,
    year,
    title,
    doi,
    pageRange,
    abstract,
    keywords,
    authors,
    banner,
    pdfFile,
  ) => {
    const article = await Article.create({
      volumeNo,
      seriesNo,
      month,
      year,
      title,
      doi,
      pageRange,
      abstract,
      keywords,
      authors,
      banner,
      pdfFile,
    });
    return article;
  },
  getArticles: async (limit = null, filters = {}) => {
    // Adjust filter for status to support both string "1" and numeric 1
    if (filters.status === "1" || filters.status === 1) {
      filters.status = { $in: ["1", 1] };
    }

    // console.log("Article filter applied:", filters);

    let query = Article.find(filters).sort({ createdAt: -1 });

    if (limit && limit > 0) {
      query = query.limit(parseInt(limit));
    }

    const articles = await query;
    // console.log("Articles returned:", articles.length);
    return articles;
  },
  getArticle: async (id) => {
    const article = await Article.findById(id);
    return article;
  },
  updateArticle: async (id, data) => {
    const objectId = new mongoose.Types.ObjectId(id);

    const article = await Article.findById(objectId);
    if (!article) {
      throw new Error("Article not found");
    }

    // Normalize for comparison (trim + case-insensitive for title)
    const orConditions = [];

    if (data.title !== undefined) {
      const incomingTitle = data.title.trim();
      const existingTitle = article.title?.trim();
      if (incomingTitle.toLowerCase() !== existingTitle?.toLowerCase()) {
        orConditions.push({
          title: { $regex: `^${incomingTitle}$`, $options: "i" },
        });
      }
    }

    if (data.volumeNo !== undefined) {
      // Strict type-safe comparison (avoids "1" !== 1 false positives)
      if (String(data.volumeNo) !== String(article.volumeNo)) {
        orConditions.push({ volumeNo: data.volumeNo });
      }
    }

    if (orConditions.length > 0) {
      const existingArticle = await Article.findOne({
        $or: orConditions,
        _id: { $ne: objectId },
      });

      if (existingArticle) {
        // Tell the user exactly which field conflicts
        const conflictFields = [];
        if (
          existingArticle.title?.toLowerCase() ===
          data.title?.trim().toLowerCase()
        ) {
          conflictFields.push("Title");
        }
        if (String(existingArticle.volumeNo) === String(data.volumeNo)) {
          conflictFields.push("Volume No.");
        }
        throw new Error(`${conflictFields.join(" and ")} already exists`);
      }
    }

    // Handle banner deletion scenarios
    if (article.banner) {
      if (data.banner) {
        const publicId = `pcsi/${getCloudinaryPublicId(article.banner)}`;
        await cloudinary.uploader.destroy(publicId);
      } else if (data.removeBanner) {
        const publicId = `pcsi/${getCloudinaryPublicId(article.banner)}`;
        await cloudinary.uploader.destroy(publicId);
      }
    }

    // Handle pdfFile deletion scenarios
    if (article.pdfFile) {
      if (data.pdfFile) {
        const publicId = `pcsi/${getCloudinaryPublicId(article.pdfFile)}`;
        await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
      } else if (data.removePdfFile) {
        const publicId = `pcsi/${getCloudinaryPublicId(article.pdfFile)}`;
        await cloudinary.uploader.destroy(publicId, { resource_type: "raw" });
      }
    }

    // Strip non-model flags
    const { removeBanner, removePdfFile, ...updateData } = data;

    // Explicitly null out removed files
    if (data.removeBanner) updateData.banner = null;
    if (data.removePdfFile) updateData.pdfFile = null;

    const result = await Article.findByIdAndUpdate(objectId, updateData, {
      new: true,
      runValidators: true, // ✅ Enforce schema validation on update
    });

    return result;
  },
  toggleArticleStatus: async (id, status) => {
    const article = await Article.findByIdAndUpdate(
      id,
      { status: status.toLowerCase() },
      { new: true },
    );
    return article;
  },
};

export default articleService;
