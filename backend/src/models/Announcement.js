import mongoose from 'mongoose';

const announcementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  banner: {
    type: String, // URL or file path to banner image
    default: null,
    trim: true
  },
  // Announcement status (active, inactive)
  status: {
    type: String,
    enum: ['1', '0'],
    default: '1'
  }
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});

// Index for better performance
announcementSchema.index({ title: 'text', description: 'text' });
announcementSchema.index({ status: 1 });


export default mongoose.model('Announcement', announcementSchema);
