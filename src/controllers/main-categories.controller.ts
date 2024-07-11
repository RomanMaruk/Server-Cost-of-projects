import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

export const getAllMainCategories = (req: Request, res: Response) => {
  // const requst = JSON.stringify(req);
  console.log(req.query);
  console.log(req.body);
  res.status(StatusCodes.OK).json({ фундамент: 'Фундамент' });
};
export const createMainCategory = (req: Request, res: Response) => {
  const some = Object.values(req.body).some((e) => e === 'wall');
  if (some) {
    res.status(StatusCodes.CONFLICT).json({ message: 'Such categoriew exist' });
    console.log('error');
  } else {
    const body = { message: 'Success', ...req.body };
    res.json(body);
  }
};
export const editMainCategory = (req: Request, res: Response) => {
  console.log(req.body);
};
export const deleteMainCategory = (req: Request, res: Response) => {
  console.log(req.body);
};
