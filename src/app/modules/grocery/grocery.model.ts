import { model, Schema } from 'mongoose';
import { TGrocery } from './grocery.interface';

const groceryProductSchema = new Schema<TGrocery>(
  {
    productName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    vendorId: {
      type: Schema.Types.ObjectId,
      ref: 'vendor',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const GroceryModel = model<TGrocery>('grocery', groceryProductSchema);
