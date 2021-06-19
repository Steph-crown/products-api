import express from 'express';
import { getCategory, postCategory } from "./../controllers/categories.controller.js";

const categoriesRoute = express.Router();

// Post categories to database
categoriesRoute.post('/post', postCategory)

// Get categories from db
categoriesRoute.get('/', getCategory)

export { categoriesRoute }