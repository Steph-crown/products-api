import express from 'express';
import { getProducts, postProducts } from "./../controllers/products.controller.js";


const productRoute = express.Router();

// Post products to the database
productRoute.post('/post', postProducts)

// Get products from db
productRoute.get('/', getProducts)

export { productRoute }