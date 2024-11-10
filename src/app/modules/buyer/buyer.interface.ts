import { Types } from 'mongoose';

export type TBuyer = {
  // status: string;
  fullName: string;
  address: string;
  phone: string;
  email: string;
  transectionId: string;
  userId: Types.ObjectId;
  // productId: Types.ObjectId;
};
