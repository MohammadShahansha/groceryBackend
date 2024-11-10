import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { addToCardService } from './addToCard.service';
// import httpStatus from 'http-status';

const createAddToCard = catchAsinc(async (req, res) => {
  const result = await addToCardService.createAddToCard(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'add to cart successfully',
    data: result,
  });
});
const getAllAddtoCard = catchAsinc(async (req, res) => {
  // console.log(req.query);
  const result = await addToCardService.getAllAddtoCard();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'All cart data retrive successfully',
    data: result,
  });
});
// const getSingleVendor = catchAsinc(async (req, res) => {
//   const { _id } = req.params;

//   const result = await vendorService.getSingleVendor(_id);
//   sendResponse(res, {
//     statusCode: 200,
//     success: true,
//     message: 'Single vendor created successfully',
//     data: result,
//   });
// });
const deleteAddToCard = catchAsinc(async (req, res) => {
  const { _id } = req.params;
  const result = await addToCardService.deleteAddToCard(_id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'deleted cart data successfully',
    data: result,
  });
});

export const addToCardController = {
  createAddToCard,
  getAllAddtoCard,
  deleteAddToCard,
};
