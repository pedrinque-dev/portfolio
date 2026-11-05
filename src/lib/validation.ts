import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'contact.validation.nameMin'),
  email: z.string().trim().email('contact.validation.emailInvalid'),
  message: z.string().trim().min(10, 'contact.validation.messageMin'),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
