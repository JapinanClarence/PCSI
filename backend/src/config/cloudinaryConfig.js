import {v2 as cloudinary} from "cloudinary";
import path from "path";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (file) => {
  const timestamp = Date.now();
  const baseName = `${timestamp}_pcsi`;

  const isImage = /jpeg|jpg|png/.test(file.mimetype);
  const isDocument = /pdf|doc|docx/.test(file.mimetype);

  let folder = "pcsi/others";
  let resourceType = "auto";

  if (isImage) {
    folder = "pcsi/banners";
    resourceType = "image";
  }

  if (isDocument) {
    folder = "pcsi/files";
    resourceType = "raw";
  }

  let publicId = baseName;
  if (resourceType === "raw") {
    const ext = path.extname(file.originalname);
    const nameWithoutExt = path.basename(file.originalname, ext);
    publicId = `${timestamp}_${nameWithoutExt}${ext}`;
  }

  const params = {
    folder,
    public_id: publicId,
    allowed_formats: ["jpg", "jpeg", "png", "pdf", "doc", "docx"],
    resource_type: resourceType,
  };

  // For large files, use upload_large
  if (file.size > 10 * 1024 * 1024) { // 10MB
    const result = await cloudinary.uploader.upload_large(file.buffer, params);
    return result.secure_url;
  } else {
    const result = await cloudinary.uploader.upload(file.buffer, params);
    return result.secure_url;
  }
};

export default cloudinary; 
