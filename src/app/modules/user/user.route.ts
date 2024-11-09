import express from 'express';
// import validateRequest from '../../middlewares/validateRequest';
// import { userValidation } from './user.validation';
import { userController } from './user.controller';

const router = express.Router();
router.post(
  '/create-user',
  // validateRequest(userValidation.userValidationSchema),
  userController.createUser,
);

router.get('/get-user', userController.getAllUser);

export const userRouter = router;
