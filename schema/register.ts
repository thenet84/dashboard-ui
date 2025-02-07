import { z } from 'zod';

export type RegisterFormSchemaType = z.infer<typeof RegisterFormSchema>;

export const RegisterFormSchema = z.object({
  name: z.string().min(1, {
      message: 'Name is required',
    }),
    email: z
      .string()
      .min(1, {
        message: 'Email is required',
      })
      .email({
        message: 'Please enter a valid email',
      }),
    password: z.string().min(1, {
      message: 'Password is required',
    }),
    confirmPassword: z.string().min(1, {
      message: 'Confirm Password is required',
    }),
});