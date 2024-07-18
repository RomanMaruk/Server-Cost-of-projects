import mongoose from 'mongoose';
import { Categories } from '../enums/categories.enum';
// const categorySchema = new mongoose.Schema({
//   key: {
//     type: String,
//     required: [true, 'Type should be provided'],
//     maxLength: [30, 'Max length should be 30 characters'],
//     unique: [true, 'Such categories exist'], // Enforces uniqueness
//   },
//   value: {
//     type: String,
//     required: [true, 'Value should be provided'],
//   },
// });

const MainCategories = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Type should be provided'],
    maxLength: [30, 'Max length should be 30 characters'],
    unique: true, // Enforces uniqueness within the array
  },
});

export default mongoose.model(Categories.mainCategory, MainCategories);
