import QueryBuilder from '../../builder/QueryBuilder';
import { searchableFeild } from './grocery.constant';
import { TGrocery } from './grocery.interface';
import { GroceryModel } from './grocery.model';

const createGrocery = async (grocery: TGrocery) => {
  const result = await GroceryModel.create(grocery);
  return result;
};

const getAllGrocery = async (query: Record<string, unknown>) => {
  //searching----------
  // const queryObj = { ...query };
  // let searchTerm = '';
  // if (query?.searchTerm) {
  //   searchTerm = query.searchTerm as string;
  // }

  // const searchQuery = BooksModel.find({
  //   $or: ['name', 'author'].map((feild) => ({
  //     [feild]: { $regex: searchTerm, $options: 'i' },
  //   })),
  // });

  //filtering------------------------

  // const excludeFeild = ['searchTerm', 'sort', 'limit', 'page'];
  // excludeFeild.forEach((element) => delete queryObj[element]);

  // console.log({ query }, { queryObj });
  // const filterQuery = searchQuery.find(queryObj);

  //sortQuery---------------

  // let sort = '-createdAt';
  // if (query?.sort) {
  //   sort = query.sort as string;
  // }
  // const sortQuery = filterQuery.sort(sort);

  //limitQuery-------------

  // let page = 1;
  // let limit = 1;
  // let skip = 0;

  // if (query?.limit) {
  //   limit = query.limit as number;
  // }

  // if (query?.page) {
  //   page = Number(query?.page);
  //   skip = (page - 1) * limit;
  // }

  // const paginateQuery = sortQuery.skip(skip);

  // const limitQuery = paginateQuery.limit(limit);

  // return limitQuery;

  //   const booksQuery = new QueryBuilder(BooksModel.find(), query)
  //     .search(searchableFeild)
  //     .filter()
  //     .sort()
  //     .paginate();

  //   const result = await booksQuery.modelQuery;
  //   return result;
  const groceryQuery = new QueryBuilder(GroceryModel.find(), query)
    .search(searchableFeild)
    .filter()
    .sort()
    .paginate();
  const result = await groceryQuery.modelQuery;
  return result;
};

const getSingleGrocery = async (id: string) => {
  const result = await GroceryModel.findById(id).populate({
    path: 'vendorId',
    populate: {
      path: 'userId',
    },
  });

  return result;
};
const deleteGrocery = async (_id: string) => {
  const result = await GroceryModel.findByIdAndDelete({ _id });
  return result;
};
const updateGrocery = async (_id: string, groceryData: TGrocery) => {
  const result = await GroceryModel.findByIdAndUpdate({ _id }, groceryData, {
    new: true,
    runValidators: true,
  });
  return result;
};
export const groceryService = {
  createGrocery,
  getAllGrocery,
  getSingleGrocery,
  deleteGrocery,
  updateGrocery,
};
