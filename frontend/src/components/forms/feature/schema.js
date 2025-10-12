import * as z from "zod";

export const FeatureSchema = z.object({
    name:z.string().min(1, {
        error:"Name is required"
    }),
    description:z.string().min(1, {error:"Description is required"}),
    status:z.enum(["0","1"]).optional()
})