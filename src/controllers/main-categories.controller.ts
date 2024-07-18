import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import mainCategoriesModel from '../models/main-categories.model';
import { Categories } from '../enums/categories.enum';

export const getAllMainCategories = async (req: Request, res: Response) => {
  // const requst = JSON.stringify(req);
  const allCategories = await mainCategoriesModel.find();
  console.log(allCategories);

  res.json(allCategories);
};
export const createMainCategory = async (req: Request, res: Response) => {
  const category = req.body.name;

  const isExist = await mainCategoriesModel.findOne({
    name: category,
  });
  if (!isExist) {
    const cat = await mainCategoriesModel.create({
      name: category,
    });
    const body = { message: 'Success', ...cat };
    res.status(StatusCodes.ACCEPTED).json(cat);
  } else {
    res.status(StatusCodes.CONFLICT).json({ error: 'Such category exist' });
  }
};
export const editMainCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  const edited = await mainCategoriesModel.findById(id).updateOne({ name });
  res.status(StatusCodes.OK).json(edited);
};
export const deleteMainCategory = async (req: Request, res: Response) => {
  const { id, name } = req.body;
  const deleted = await mainCategoriesModel.deleteOne({ _id: id });
  res.status(StatusCodes.OK).json({ deleted, id, name });
};
