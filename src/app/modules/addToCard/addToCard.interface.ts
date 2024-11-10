import { Types } from 'mongoose';

export type TAddToCard = {
  productId: Types.ObjectId;
  userId: Types.ObjectId;
};
