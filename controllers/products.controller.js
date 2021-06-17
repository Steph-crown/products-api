import { ProductModel } from './../models/products.model.js';
import { CategoryModel } from './../models/categories.model.js'


export const productController = (req, res, next) => {
    try {
        // Creates new product object
        let newProduct = new ProductModel(req.body);

        // Checks that all the category id's are present in the category table
        for (let categoryName of newProduct.categories) {
            CategoryModel.findOne({name: categoryName})
            .exec((err, data) => {
                if (!data) {
                    // res.status(400).json({
                    //     error: `Category with id ${categoryName} does not exist in database`
                    // });
                    
                }
            })
        }

        // Saves new product object
        newProduct.save((err, data) => {
            if (err) res.status(400).json({
                error: "Error saying data"
            });
            else {
                res.status(200).json({
                    status: 200,
                    data: data
                });
            }
        })
    } catch(err) {
        res.send("fghjlkjhgfds")
    } finally {
        console.log("done");
    }

}