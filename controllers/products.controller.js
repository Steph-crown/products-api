import { ProductModel } from './../models/products.model.js';


const postProducts = (req, res, next) => {
    try {
        // Creates new product object
        let newProduct = new ProductModel(req.body);

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

const getProducts = (req, res) => {
    ProductModel.find({}, (err, data) => {
        if (err) res.status(400).json({
            error: "Error getting data"
        });
        else {
            res.status(200).json({
                status: 200,
                data: data
            })
        }
    })
}

export { postProducts, getProducts}