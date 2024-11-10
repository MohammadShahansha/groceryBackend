import { model, Schema } from 'mongoose';
import { TAddToCard } from './addToCard.interface';
const addToCardSchema = new Schema<TAddToCard>({
  productId: {
    type: Schema.Types.ObjectId,
    ref: 'grocery',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
});

export const AddToCardModel = model<TAddToCard>('addtocard', addToCardSchema);
