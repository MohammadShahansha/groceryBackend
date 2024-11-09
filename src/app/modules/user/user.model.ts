import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import AppError from '../../errors/AppError';
import config from '../../config';
const userSchema = new Schema<TUser, UserModel>(
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

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(user?.password, Number(config.bcrypt_salt));
  next();
});

userSchema.pre('save', async function (next) {
  const isUserExist = await UsersModel.findOne({
    email: this.email,
  });

  if (isUserExist) {
    throw new AppError(404, 'User is allready exist');
  }
  next();
});

userSchema.statics.isUserExistByCustomEmail = async function (email: string) {
  return await UsersModel.findOne({ email });
};

userSchema.statics.isPasswordMatch = async function (
  plainTextPassword,
  hashTextPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashTextPassword);
};

export const UsersModel = model<TUser, UserModel>('user', userSchema);
