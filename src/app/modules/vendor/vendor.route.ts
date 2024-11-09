import express from 'express';
import auth from '../../middlewares/auth';
import { vendorController } from './vendor.controller';

const router = express.Router();
router.post(
  '/create-vendor',
  //   validateRequest(shoesValidation.shoesValidationSchema),
  auth('admin', 'vendor'),
  vendorController.createVendor,
);
router.get('/get-vendor', vendorController.getAllVendor);
router.get('/single-vendor/:_id', vendorController.getSingleVendor);
router.delete(
  '/delete-vendor/:_id',
  //   auth('admin'),
  vendorController.deleteVendor,
);
router.put('/update-vendor/:_id', vendorController.updateVendor);

export const vendorRouter = router;
