import express from 'express';
import { productController } from "./../controllers/products.controller.js";


const productRoute = express.Router();

// Post products to the database
productRoute.post('/post', productController)

export { productRoute }