const ProductModel = require("../Models/ProductModel");

async function Get_all_product(req, res) {
    try {
        const Data = await ProductModel.find()
        res.status(200).json({
            success:true,
            error:false,
            data:Data,
        })
        
    } catch (error) {
        res.status(400).json({
            success:false,
            error:true,
            message:error
        })
    }
}
module.exports = Get_all_product;
