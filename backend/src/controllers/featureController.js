import featureService from "../services/featureService.js";
import { asyncHandler } from "../middlewares/errorHandler.js";
import { STATUS_CODES } from "../utils/constants.js";

const featureController = {
    createFeature: asyncHandler(async (req, res) => {
        const { name, description, image } = req.body;
        const feature = await featureService.createFeature(name, description, image);
        res.status(STATUS_CODES.CREATED).json({
            success: true,
            message: "Feature created successfully",
            data: feature
        });
    }),
    getFeatures: asyncHandler(async (req, res) => {
        const features = await featureService.getFeatures();
        res.status(STATUS_CODES.OK).json({
            success: true,
            message: "Features fetched successfully",
            data: features
        });
    }),
    getFeature: asyncHandler(async (req, res) => {
        const feature = await featureService.getFeature(req.params.id);
        res.status(STATUS_CODES.OK).json({
            success: true,
            message: "Feature fetched successfully",
            data: feature
        });
    }),
    updateFeature: asyncHandler(async (req, res) => {
        const feature = await featureService.updateFeature(req.params.id, req.body);
        res.status(STATUS_CODES.OK).json({
            success: true,
            message: "Feature updated successfully",
            data: feature
        });
    }),
    toggleFeatureStatus: asyncHandler(async (req, res) => {
        const feature = await featureService.toggleFeatureStatus(req.params.id, req.body.status);
        res.status(STATUS_CODES.OK).json({
            success: true,
            message: "Feature status toggled successfully",
            data: feature
        });
    }),
}

export default featureController;