import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { loginRouter } from '../modules/auth/auth.route';
import { vendorRouter } from '../modules/vendor/vendor.route';
import { groceryRouter } from '../modules/grocery/grocery.route';
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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
