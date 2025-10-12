import api from '@/lib/api';

const announcementService = {
  // Get all announcements
  getAnnouncements: async (limit = null, filters = {}) => {
    try {
      const params = { ...filters };
      if (limit) params.limit = limit;
      
      const response = await api.get('/announcements', { params });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to fetch announcement' 
      };
    }
  },

  // Get announcement by ID
  getAnnouncement: async (id) => {
    try {
      const response = await api.get(`/announcements/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to fetch announcement' 
      };
    }
  },

  // Create new announcement
  createAnnouncement: async (announcementData) => {
    try {
      const response = await api.post('/announcements', announcementData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to create announcement' 
      };
    }
  },

  // Update announcement
  updateAnnouncement: async (id, announcementData) => {
    try {
      const response = await api.put(`/announcements/${id}`, announcementData);
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to update announcement' 
      };
    }
  },

  // Toggle anouncement status (active/inactive)
  toggleAnnouncementStatus: async (id, status) => {
    try {
      const response = await api.patch(`/announcements/${id}/status`, { status });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.message || 'Failed to update announcement status' 
      };
    }
  }
};

export default announcementService;
