import { asyncHandler } from '../middlewares/errorHandler.js';
import publicationService from '../services/publicationService.js';
import { STATUS_CODES } from '../utils/constants.js';

const publicationController = {
  createPublication: asyncHandler(async (req, res) => {
    const { title, description, image } = req.body;
    const publication = await publicationService.createPublication(title, description, image);
    res.status(STATUS_CODES.CREATED).json({
      success: true,
      message: 'Publication created successfully',
      data: publication
    });
  }),
  getPublications: asyncHandler(async (req, res) => {
    const publications = await publicationService.getPublications();
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Publications fetched successfully',
      data: publications
    });
  }),
  getPublication: asyncHandler(async (req, res) => {
    const publication = await publicationService.getPublication(req.params.id);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Publication fetched successfully',
      data: publication
    });
  }),
  updatePublication: asyncHandler(async (req, res) => {
    const publication = await publicationService.updatePublication(req.params.id, req.body);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Publication updated successfully',
      data: publication
    });
  }),
  togglePublicationStatus: asyncHandler(async (req, res) => {
    const { status } = req.body;
    const publication = await publicationService.togglePublicationStatus(req.params.id, status);
    res.status(STATUS_CODES.OK).json({
      success: true,
      message: 'Publication status updated successfully',
      data: publication
    });
  }),
};

export default publicationController;   