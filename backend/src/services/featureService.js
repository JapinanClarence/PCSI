import Feature from "../models/Feature";

const featureService = {
    createFeature: async (name, description, image) => {
        const feature = await Feature.create({ name, description, image });
        return feature;
    },
    getFeatures: async () => {
        const features = await Feature.find().sort({ createdAt: -1 });
        return features;
    },
    getFeature: async (id) => {
        const feature = await Feature.findById(id);
        return feature;
    },
    updateFeature: async (id, data) => {
        const feature = await Feature.findByIdAndUpdate(id, data, { new: true });
        return feature;
    },
    toggleFeatureStatus: async (id, status) => {
        const feature = await Feature.findByIdAndUpdate(id, { status: status.toLowerCase() }, { new: true });
        return feature;
    },
}

export default featureService;