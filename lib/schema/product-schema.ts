import {z} from "zod";

export const productSchema = z.object({
    name: z
        .string()
        .min(2, {message: "Name must be at least 2 characters long"})
        .max(255, {message: "Name cannot exceed 255 characters"}),
    description: z
        .string()
        .max(1000, {message: "Description cannot exceed 1000 characters"})
        .optional(),
    price: z.union([
        z.string().trim().transform(v => v === "" ? 0 : parseFloat(v)),
        z.number()
    ])
        .refine(val => val >= 0, {message: "Price must be a positive number"}),

    stock: z.union([
        z.string().trim().transform(v => v === "" ? 0 : parseInt(v, 10)),
        z.number().int()
    ])
        .refine(val => val >= 0, {message: "Stock cannot be negative"}),
    category: z
        .string()
        .max(50, {message: "Category cannot exceed 50 characters"})
        .optional(),
    image_url: z
        .string()
        .url({message: "Please enter a valid URL"})
        .max(255, {message: "URL cannot exceed 255 characters"})
        .optional(),
});

export type ProductFormValues = z.infer<typeof productSchema>;
