import Product from '../data/Product.js';
import fs from 'fs';



export const getProducts = async (req,resp)=>{
    try {
        const products = await Product.find();
    if (products.length > 0){
        resp.send(products)
    }else {
        resp.send({result: "No product found"})
    }
    }catch (error) {
        console.error('Error fetching products:', error);
    }
}

export const getproduct = async (req,resp)=>{
    try {
        let result = await Product.findOne({_id: req.params.id});
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found"})
    }
    } catch (error) {
        console.error('Error fetching product:', error);
    }
}

 export const updateProduct = async(req,resp)=>{
    try{
        let result = await Product.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        resp.send("Update Success" + result)
    } catch (error) {
        console.error('Error uupdating product:', error);
    }
}

export const addProduct = async(req,resp)=>{
    try {
        const {price, name, text} = req.body;
    const img = req.file ? req.file.path : '';

    let product = new Product({img, price, name, text});
    let result = await product.save();

    
    resp.send("Add Success" + result)
    } catch (error) {
        console.error('Error adding product:', error);
    }
}

export const deleteProduct = async (req,resp)=>{
    try {
        const product = await Product.findOne({_id: req.params.id});
        if (product) {
            // delete from databases
            let result = await Product.deleteOne({_id: req.params.id});  

            // delete from uploads
            const filePath = path.join(__dirname, product.img);
            fs.unlink(filePath, (err)=> {
                if (err) { console.error('Error deleting image file:', err)}
            });

            resp.send("Delete Success" + result)
        }else {
            resp.status(404).send({result: "Product not found"});
        } 

    } catch (error) {
        console.error('Erro deleting product:',error);
    }
}

export const searchProduct = async (req,resp)=>{
    try {
        let result = await Product.find({
            "$or": [
                { name: {$regex: req.params.key, $options: 'i'}},
                { text: {$regex: req.params.key, $options: 'i'}},
                { price: {$regex: req.params.key, $options: 'i'}}
            ]
        })
        resp.send(result)
    } catch (error) {
        console.error('Error searching products:', error);
    }
}

