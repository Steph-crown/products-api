import express from 'express';
import { categoryController } from "./../controllers/categories.controller.js";

const categoriesRoute = express.Router();

// Post categories to database
categoriesRoute.post('/post', categoryController)

export { categoriesRoute }