import { catchAsinc } from '../../utils/catchAsinc';
import sendResponse from '../../utils/sendResponse';
import { paymentService } from './payment.service';

const initiatPayment = catchAsinc(async (req, res) => {
  const { buyerId } = req.params;
  const result = await paymentService.initiatPayment(buyerId);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'payment initiate successfully',
    data: result,
  });
});
const validatePayment = catchAsinc(async (req, res) => {
  const result = await paymentService.validatePayment(req.query);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'payment validate successfully',
    data: result,
  });
});

export const paymentController = {
  initiatPayment,
  validatePayment,
};
