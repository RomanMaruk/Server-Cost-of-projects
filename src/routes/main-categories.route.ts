import express from 'express';
import {
  createMainCategory,
  deleteMainCategory,
  editMainCategory,
  getAllMainCategories,
} from '../controllers/main-categories.controller';

export const route = express.Router();
const routeCategories = '/main-categories';

route
  .get(routeCategories, getAllMainCategories)
  .post(routeCategories, createMainCategory)
  .put(routeCategories, editMainCategory)
  .delete(routeCategories, deleteMainCategory);
