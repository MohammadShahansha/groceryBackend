import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
// import httpStatus from 'http-status';
import { vendorService } from './vendor.service';

const createVendor = catchAsinc(async (req, res) => {
  const result = await vendorService.createVendor(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'vendor created successfully',
    data: result,
  });
});
const getAllVendor = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await vendorService.getAllVendor();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'vendor retrive successfully',
    data: result,
  });
});
const getSingleVendor = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await vendorService.getSingleVendor(_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single vendor created successfully',
    data: result,
  });
});
const deleteVendor = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await vendorService.deleteVendor(_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Vendor deleted successfully',
    data: result,
  });
});
const updateVendor = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await vendorService.updateVendor(_id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Vendor updated successfully',
    data: result,
  });
});

export const vendorController = {
  createVendor,
  getAllVendor,
  getSingleVendor,
  deleteVendor,
  updateVendor,
};
