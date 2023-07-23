import { z } from 'zod';
import { UserSchemaRequest, UserSchemaReturn } from '../schema/user.schema';

type UserDto = z.infer<typeof UserSchemaRequest>;
type UserReturn = z.infer<typeof UserSchemaReturn>;

export { UserDto, UserReturn };
