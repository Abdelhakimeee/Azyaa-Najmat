const express = require('express');
const multer = require('multer')
const path = require('path');
const cors = require('cors')
const fs = require('fs');
const authenticateToken = require('./auth/auth.js');



const app = express();
app.use(express.json())
app.use(cors())
app.use('/auth',authenticateToken)


require('./data/config') // connect to Atlass mongoDB
const Product = require('./data/Product')

            // uploads  save the imge  using  " multer " 
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + path.extname(file.originalname));    

        }
    })
    const upload = multer({storage: storage});

app.use('/uploads', express.static('uploads'));  // alone index use folder uploads 

app.post('/add-product',authenticateToken, upload.single('img'), async(req,resp)=>{
    try {
        const {price, name, text} = req.body;
    const img = req.file ? req.file.path : '';

    let product = new Product({img, price, name, text});
    let result = await product.save();

    
    resp.send(result)
    } catch (error) {
        console.error('Error adding product:', error);
    }
})

app.get('/products',async (req,resp)=>{
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
})

app.delete('/products/:id',authenticateToken, async (req,resp)=>{
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

            resp.send(result)
        }else {
            resp.status(404).send({result: "Product not found"});
        } 

    } catch (error) {
        console.error('Erro deleting product:',error);
    }
})

app.get('/product/:id', async (req,resp)=>{
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
})

app.put('/product/:id',authenticateToken, async(req,resp)=>{
    try{
        let result = await Product.updateOne(
            {_id: req.params.id},
            {$set: req.body}
        )
        resp.send(result)
    } catch (error) {
        console.error('Error uupdating product:', error);
    }
})

app.get('/search/:key', async (req,resp)=>{
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
})

app.listen(5300);