import multer from "multer";
import path from "path";

// Memory Storage
const storage = multer.memoryStorage();

// Multer instance
const upload = multer({
  storage,
  limits: { fileSize: 30 * 1024 * 1024 }, // 30 MB
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|pdf|doc|docx/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);

    if (mimetype && extname) return cb(null, true);

    cb(new Error("Only jpg, jpeg, png, pdf, doc, docx are allowed."));
  },
});

export default upload;
