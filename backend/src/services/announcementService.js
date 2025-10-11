import Announcement from '../models/Announcement.js';

const announcementService = {
  createAnnouncement: async (title, description, image) => {
    const announcement = await Announcement.create({ title, description, image });
    return announcement;
  },
  getAnnouncements: async () => {
    const announcements = await Announcement.find();
    return announcements;
  },
  getAnnouncement: async (id) => {
    const announcement = await Announcement.findById(id);
    return announcement;
  },
  updateAnnouncement: async (id, data) => {
    const announcement = await Announcement.findByIdAndUpdate(id, data, { new: true });
    return announcement;
  },
  toggleAnnouncementStatus: async (id, status) => {
    const announcement = await Announcement.findByIdAndUpdate(
      id, 
      { status: status.toLowerCase() }, 
      { new: true }
    );
    return announcement;
  },

};

export default announcementService;