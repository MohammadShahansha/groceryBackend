/* eslint-disable no-unused-vars */

export interface TUser {
  name: string;
  email: string;
  password: string;
  image?: string;
  needsPasswordChange: boolean;
  passwordChangedAt?: Date;
  about?: string;
  phone?: string;
  address?: string;
  skill?: string[];
  role: 'admin' | 'user' | 'vendor';
  isDeleted: boolean;
}

// export interface UserModel extends Model<TUser> {
//   isUserExistByCustomEmail(email: string): Promise<TUser>;
//   isPasswordMatch(
//     plainTextPassword: string,
//     hashTextPassword: string,
//   ): Promise<boolean>;
// }
