import { z } from 'zod';

export type PostFormSchemaType = z.infer<typeof PostFormSchema>;

export const PostFormSchema = z.object({
    title: z.string().min(1, {message: 'Title is required'}),
    body: z.string().min(1, {message: 'Body is required'}),
    author: z.string().min(1, {message: 'Author is required'}),
    date: z.string().min(1, {message: 'Date is required'}),
});
