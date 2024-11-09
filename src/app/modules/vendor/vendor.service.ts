import { TVendor } from './vendor.interface';
import { VendorModel } from './vendor.model';

const createVendor = async (vendor: TVendor) => {
  const result = await VendorModel.create(vendor);
  return result;
};

const getAllVendor = async () => {
  const result = await VendorModel.find().populate('userId');

  return result;
};

const getSingleVendor = async (id: string) => {
  const result = await VendorModel.findById(id).populate('userId');
  return result;
};
const deleteVendor = async (_id: string) => {
  const result = await VendorModel.findByIdAndDelete({ _id });
  return result;
};
const updateVendor = async (_id: string, vendorData: TVendor) => {
  const result = await VendorModel.findByIdAndUpdate({ _id }, vendorData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const vendorService = {
  createVendor,
  getAllVendor,
  getSingleVendor,
  deleteVendor,
  updateVendor,
};
