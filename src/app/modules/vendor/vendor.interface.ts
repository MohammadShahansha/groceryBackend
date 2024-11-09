import { Types } from 'mongoose';

export interface TVendor {
  vendorName: string;
  vendorEmail: string;
  image: string;
  description: string;
  phone: string;
  address: string;
  logo: string;
  rating?: number;
  review?: string;
  userId: Types.ObjectId;
}
