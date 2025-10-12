import mongoose from "mongoose";

const featureSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [200, "Name cannot exceed 200 characters"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
    },
    banner: {
      type: String, // URL or file path to banner image
      default: null,
      trim: true,
    },
    // Feature status (active, inactive)
    status: {
      type: String,
      enum: ["1", "0"],
      default: "1",
    },
  },
  {
    timestamps: true, 
  }
);

// Index for better performance
featureSchema.index({ name: "text", description: "text" });
featureSchema.index({ status: 1 });

export default mongoose.model("Feature", featureSchema);
