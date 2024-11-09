import express from 'express';
// import auth from '../../middlewares/auth';
import { groceryController } from './grocery.controller';

const router = express.Router();
router.post('/create', groceryController.createGrocery);
router.get('/get-grocery', groceryController.getAllGrocery);
router.get(
  '/single-grocery/:_id',

  groceryController.getSingleGrocery,
);
router.delete('/delete-grocery/:_id', groceryController.deleteGrocery);
router.put('/update-grocery/:_id', groceryController.updateGrocery);

export const groceryRouter = router;
