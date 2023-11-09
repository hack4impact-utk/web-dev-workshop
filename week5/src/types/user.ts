import { z } from 'zod';

/* Base */
const zUser = z.object({
  username: z.string(),
  name: z.string(),
  email: z.string().email(),
  isVerified: z.boolean(),
  numFollowers: z.number(),
});
export type User = z.infer<typeof zUser>;

/* Entity */
export const zUserEntity = zUser.extend({
  _id: z.string(),
});
export type UserEntity = z.infer<typeof zUserEntity>;

/* Create Request */
export const zCreateUserRequest = zUser.omit({
  isVerified: true,
  numFollowers: true,
});
export type CreateUserRequest = z.infer<typeof zCreateUserRequest>;

/* Response */
export const zUserResponse = zUserEntity;
export type UserResponse = z.infer<typeof zUserResponse>;

export default zUser;
