import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { groceryService } from './grocery.service';
// import httpStatus from 'http-status';

const createGrocery = catchAsinc(async (req, res) => {
  const result = await groceryService.createGrocery(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Grocery created successfully',
    data: result,
  });
});
const getAllGrocery = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await groceryService.getAllGrocery(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Grocery retrive successfully',
    data: result,
  });
});
const getSingleGrocery = catchAsinc(async (req, res) => {
  const { _id } = req.params;

  const result = await groceryService.getSingleGrocery(_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Single Grocery created successfully',
    data: result,
  });
});
const deleteGrocery = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await groceryService.deleteGrocery(_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Grocery deleted successfully',
    data: result,
  });
});
const updateGrocery = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await groceryService.updateGrocery(_id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Grocery updated successfully',
    data: result,
  });
});

export const groceryController = {
  createGrocery,
  getAllGrocery,
  getSingleGrocery,
  deleteGrocery,
  updateGrocery,
};
