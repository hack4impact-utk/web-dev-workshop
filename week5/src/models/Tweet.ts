import { Model, Schema, model, models } from 'mongoose';
import { TweetEntity } from '../types/tweet';

const TweetSchema = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export interface TweetDocument extends TweetEntity, Document {}
export default (models.Tweet as Model<TweetDocument>) ||
  model<TweetDocument>('Tweet', TweetSchema);
