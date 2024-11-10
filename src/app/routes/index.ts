import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { loginRouter } from '../modules/auth/auth.route';
import { vendorRouter } from '../modules/vendor/vendor.route';
import { groceryRouter } from '../modules/grocery/grocery.route';
import { buyerProductRouter } from '../modules/buyer/buyer.route';
import { paymentRoute } from '../modules/payment/payment.route';
import { addToCardRouter } from '../modules/addToCard/addToCard.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/user',
    route: userRouter,
  },
  {
    path: '/auth',
    route: loginRouter,
  },
  {
    path: '/vendor',
    route: vendorRouter,
  },
  {
    path: '/grocery',
    route: groceryRouter,
  },
  {
    path: '/buyer',
    route: buyerProductRouter,
  },
  {
    path: '/payment',
    route: paymentRoute,
  },
  {
    path: '/cart',
    route: addToCardRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
