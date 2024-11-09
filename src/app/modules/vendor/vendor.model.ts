import { model, Schema } from 'mongoose';
import { TVendor } from './vendor.interface';

const vendorSchema = new Schema<TVendor>(
  {
    vendorName: {
      type: String,
      required: true,
    },
    vendorEmail: {
      type: String,
      required: true,
      unique: true,
    },

    description: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },

    logo: {
      type: String,
      required: true,
    },

    review: {
      type: String,
    },
    rating: {
      type: Number,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  {
    timestamps: true,
  },
);

export const VendorModel = model<TVendor>('vendor', vendorSchema);
