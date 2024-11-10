import { TAddToCard } from './addToCard.interface';
import { AddToCardModel } from './addToCard.model';

const createAddToCard = async (cardData: TAddToCard) => {
  const result = await AddToCardModel.create(cardData);
  return result;
};

const getAllAddtoCard = async () => {
  const result = await AddToCardModel.find()
    .populate('productId')
    .populate('userId');

  return result;
};

// const getSingleBuyerProduct = async (id: string) => {
//   const result = await BuyerModel.findById(id);
//   return result;
// };
const deleteAddToCard = async (_id: string) => {
  const result = await AddToCardModel.findByIdAndDelete({ _id });
  return result;
};
export const addToCardService = {
  createAddToCard,
  getAllAddtoCard,
  deleteAddToCard,
};
