import { Types } from 'mongoose';

export interface TGrocery {
  productName: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
  category: string;
  description: string;
  rating?: number;
  vendorId: Types.ObjectId;
}
