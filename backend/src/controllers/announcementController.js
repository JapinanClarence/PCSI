import { asyncHandler } from '../middlewares/errorHandler.js';
import announcementService from '../services/announcementService.js';
import { STATUS_CODES } from '../utils/constants.js';

const announcementController = {
  createAnnouncement: asyncHandler(async (req, res) => {
    const { title, description, image } = req.body;
    const announcement = await announcementService.createAnnouncement(title, description, image);
    res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: 'Announcement created successfully',
      data: announcement
    });
  }),
  getAnnouncements: asyncHandler(async (req, res) => {
    const announcements = await announcementService.getAnnouncements();
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Announcements fetched successfully',
      data: announcements
    });
  }),
  getAnnouncement: asyncHandler(async (req, res) => {
    const announcement = await announcementService.getAnnouncement(req.params.id);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Announcement fetched successfully',
      data: announcement
    });
  }),
  updateAnnouncement: asyncHandler(async (req, res) => {
    const announcement = await announcementService.updateAnnouncement(req.params.id, req.body);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Announcement updated successfully',
      data: announcement
    });
  }),
  toggleAnnouncementStatus: asyncHandler(async (req, res) => {
    const { status } = req.body;
    const announcement = await announcementService.toggleAnnouncementStatus(req.params.id, status);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Announcement status updated successfully',
      data: announcement
    });
  }),
};

export default announcementController;   