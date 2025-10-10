import Publication from '../models/Publication.js';
import { MESSAGES } from '../utils/constants.js';

const publicationService = {
  createPublication: async (title, description, image) => {
    const publication = await Publication.create({ title, description, image });
    return publication;
  },
};

export default publicationService;