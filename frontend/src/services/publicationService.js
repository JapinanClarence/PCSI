import api from '@/lib/api';

const publicationService = {
  // Get all publications
  getPublications: async (params = {}) => {
    try {
      const response = await api.get('/publications', { params });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to fetch publications' 
      };
    }
  },

  // Get publication by ID
  getPublication: async (id) => {
    try {
      const response = await api.get(`/publications/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to fetch publication' 
      };
    }
  },

  // Create new publication
  createPublication: async (publicationData) => {
    try {
      const response = await api.post('/publications', publicationData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to create publication' 
      };
    }
  },

  // Update publication
  updatePublication: async (id, publicationData) => {
    try {
      const response = await api.put(`/publications/${id}`, publicationData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to update publication' 
      };
    }
  },

  // Delete publication
  deletePublication: async (id) => {
    try {
      const response = await api.delete(`/publications/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to delete publication' 
      };
    }
  },

  // Toggle publication status (active/inactive)
  togglePublicationStatus: async (id, status) => {
    try {
      const response = await api.patch(`/publications/${id}/status`, { status });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to update publication status' 
      };
    }
  }
};

export default publicationService;
