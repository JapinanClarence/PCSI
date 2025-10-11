import api from "@/lib/api";

const featureService = {
  getFeatures: async (params = {}) => {
    try {
      const response = await api.get("/features", { params });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to fetch feature",
      };
    }
  },

  // Get announcement by ID
  getFeature: async (id) => {
    try {
      const response = await api.get(`/features/${id}`);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to fetch feature",
      };
    }
  },

  // Create new announcement
  createFeature: async (featureData) => {
    try {
      const response = await api.post("/features", featureData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to create feature",
      };
    }
  },

  // Update announcement
  updateFeature: async (id, featureData) => {
    try {
      const response = await api.put(`/features/${id}`, featureData);
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || "Failed to update feature",
      };
    }
  },

  // Toggle anouncement status (active/inactive)
  toggleFeatureStatus: async (id, status) => {
    try {
      const response = await api.patch(`/features/${id}/status`, { status });
      return { success: true, data: response.data };
    } catch (error) {
      return {
        success: false,
        error:
          error.response?.data?.message ||
          "Failed to update announcement status",
      };
    }
  },
};

export default featureService;
