import mongoose from 'mongoose';

const productSchema = {
    name: {
        type: String,
        required: [true, 'No `name` key in request']
    },
    description: {
        type: String,
        required: [true, 'No `description` key in request']
    },
    image: {
        type: String,
        required: [true, 'No `image` key in request']
    },
    price: {
        type: String,
        required: [true, 'No `price` key in request']
    },
    categories: [String]
};

const ProductModel = mongoose.model('products', mongoose.Schema(productSchema))
export  { ProductModel };