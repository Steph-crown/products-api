import mongoose from 'mongoose';

const categorySchema = {
    name: {
        type: String,
        required: [true, 'No `name` key in request']
    }
};

const CategoryModel = mongoose.model('category', mongoose.Schema(categorySchema))
export  { CategoryModel };