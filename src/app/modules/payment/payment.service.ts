/* eslint-disable @typescript-eslint/no-explicit-any */

// import axios from 'axios';
import { AddToCardModel } from '../addToCard/addToCard.model';
import { BuyerModel } from '../buyer/buyer.model';
import { SSLService } from '../SSL/ssl.service';
// import config from '../../config';

const initiatPayment = async (_id: string) => {
  const totalData: any = await AddToCardModel.find().populate('productId');
  //   console.log(totalData);
  let totalAmount: number = 0;
  totalData.map((item: any) => {
    if (item.productId && typeof item.productId.price === 'number') {
      totalAmount += item.productId.price;
    }
    return totalAmount;
  });
  //   console.log(totalAmount);
  const paymentData: any = await BuyerModel.findById(_id);
  //   console.log(paymentData);

  const initPaymentData = {
    totalAmount: totalAmount,
    transectionId: paymentData?.transectionId,
    customerName: paymentData?.fullName,
    customerAddress: paymentData?.address,
    customerEmail: paymentData?.email,
    customerPhone: paymentData?.phone,
  };

  const result = await SSLService.initPayment(initPaymentData);
  console.log(result.GatewayPageURL);
  //   return {
  //     paymentUrl: result.GatewayPageURL,
  //   };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const validatePayment = async (payload: any) => {
  if (!payload || !payload.status || !(payload.status === 'VALID')) {
    return {
      message: 'invalid payment',
    };
  }

  const response = await SSLService.validatePayment(payload);
  if (response.status !== 'VALID') {
    return {
      message: 'Payment Faild',
    };
  }
};

export const paymentService = {
  initiatPayment,
  validatePayment,
};
