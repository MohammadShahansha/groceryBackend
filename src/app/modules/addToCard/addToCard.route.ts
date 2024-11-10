import express from 'express';
// import auth from '../../middlewares/auth';
import { addToCardController } from './addToCard.controller';

const router = express.Router();
router.post('/create', addToCardController.createAddToCard);
router.get('/get-cartdata', addToCardController.getAllAddtoCard);
router.delete('/delete-cartdata/:_id', addToCardController.deleteAddToCard);
export const addToCardRouter = router;
