import express from 'express'
var app = express();
import { productRoute } from './routes/index.js';
import { categoriesRoute } from "./routes/categories.js";
import { globalErrorHandler } from './controllers/error.controller.js';


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products', productRoute);
app.use('/categories', categoriesRoute)


app.use(globalErrorHandler)

export { app }