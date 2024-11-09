import { model, Schema } from 'mongoose';
import { TBuyer } from './buyer.interface';
const buyerSchema = new Schema<TBuyer>({
  status: {
    type: String,
    default: 'unpaid',
  },
  transectionId: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'grocery',
    required: true,
  },
});

export const BuyerModel = model<TBuyer>('buyer', buyerSchema);
