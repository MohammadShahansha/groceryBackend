import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },

    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: ['admin', 'user', 'vendor'],
      default: 'user',
    },
    about: {
      type: String,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    skill: {
      type: [String],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = model<TUser>('user', userSchema);
