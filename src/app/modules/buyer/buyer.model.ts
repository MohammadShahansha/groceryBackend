import { model, Schema } from 'mongoose';
import { TBuyer } from './buyer.interface';
const buyerSchema = new Schema<TBuyer>({
  // status: {
  //   type: String,
  //   default: 'unpaid',
  // },
  transectionId: {
    type: String,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  // productId: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'grocery',
  //   required: true,
  // },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export const BuyerModel = model<TBuyer>('buyer', buyerSchema);
