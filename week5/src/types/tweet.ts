import { z } from 'zod';
import zUser, { zUserResponse } from './user';

/* Base */
const zTweet = z.object({
  author: zUser,
  content: z.string(),
});
export type Tweet = z.infer<typeof zTweet>;

/* Entity */
export const zTweetEntity = zTweet.extend({
  _id: z.string(),
  author: z.string(),
});
export type TweetEntity = z.infer<typeof zTweetEntity>;

/* Create Request */
export const zCreateTweetRequest = zTweetEntity.omit({ _id: true });
export type CreateTweetRequest = z.infer<typeof zCreateTweetRequest>;

/* Response */
export const zTweetResponse = zTweetEntity.extend({
  author: zUserResponse,
});
export type TweetResponse = z.infer<typeof zTweetResponse>;

export default zTweet;
