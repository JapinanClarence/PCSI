import * as z from "zod";

export const PublicationSchema = z.object({
    title:z.string().min(1, {
        error:"Title is required"
    }),
    description:z.string().min(1, {error:"Description is required"}),
    date:z.string(),
    status:z.enum(["0","1"]).optional()
})