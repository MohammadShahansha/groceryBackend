import { Types } from 'mongoose';

export type TBuyer = {
  status: string;
  transectionId: string;
  userId: Types.ObjectId;
  productId: Types.ObjectId;
};
