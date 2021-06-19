import { CategoryModel } from './../models/categories.model.js';


const postCategory = (req, res) => {
    // Creates new category object
    let newCategory = new CategoryModel(req.body);
    
    // Checks if the category name exists in database
    CategoryModel.findOne({name: req.body.name})
        .exec((err, data) => {
            if (data) {
                res.status(200).json({
                    error: `Category exists in database`
                })
            }else {

                // Saves new product object
                newCategory.save((err, data) => {
                    if (err) res.status(400).json({
                        error: "Error saving data",
                        errDescription: err
                    });
                    else {
                        res.status(200).json({
                            status: 200,
                            data: data
                        });
                    }
                });
            }
        });
}

const getCategory = (req, res) => {
    CategoryModel.find({}, (err, data) => {
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

export {postCategory, getCategory}