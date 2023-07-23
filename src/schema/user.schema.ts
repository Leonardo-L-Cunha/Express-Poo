import { z } from 'zod';

const UserSchemaRequest = z.object({
  firstName: z.string().min(3),
  secondName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6)
});

const UserSchemaReturn = z.object({
  id: z.string(),
  firstName: z.string().min(3),
  secondName: z.string().min(3),
  email: z.string().email(),
  createdAt: z.date()
});

export { UserSchemaRequest, UserSchemaReturn };
