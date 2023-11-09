import { Model, Schema, model, models } from 'mongoose';
import { UserEntity } from '../types/user';

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: false,
    },
    isVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
    numFollowers: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    versionKey: false,
  }
);

export interface UserDocument extends UserEntity, Document {}
export default (models.User as Model<UserDocument>) ||
  model<UserDocument>('User', UserSchema);
