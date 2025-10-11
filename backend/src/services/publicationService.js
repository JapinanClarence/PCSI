import Publication from '../models/Publication.js';

const publicationService = {
  createPublication: async (title, description, image) => {
    const publication = await Publication.create({ title, description, image });
    return publication;
  },
  getPublications: async () => {
    const publications = await Publication.find();
    return publications;
  },
  getPublication: async (id) => {
    const publication = await Publication.findById(id);
    return publication;
  },
  updatePublication: async (id, data) => {
    const publication = await Publication.findByIdAndUpdate(id, data, { new: true });
    return publication;
  },
  togglePublicationStatus: async (id, status) => {
    const publication = await Publication.findByIdAndUpdate(
      id, 
      { status: status.toLowerCase() }, 
      { new: true }
    );
    return publication;
  },

};

export default publicationService;