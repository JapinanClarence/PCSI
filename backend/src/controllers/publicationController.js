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
};

export default publicationController;   