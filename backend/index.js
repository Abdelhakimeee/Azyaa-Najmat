import express from "express";
import cors from 'cors';
import authenticateToken from './auth/auth.js';
import './data/config.js';  // connection to all DB_bays
import productRoute from "./routes/product.route.js";
import uploadImgRoute from "./routes/uploadImg.route.js";  //   NN_8  next to upload Imag using Multer



const app = express();
console.log('Work_1')     // Deleted 
app.use(express.json())
app.use(cors())
app.use('/auth',authenticateToken)
app.use('/uploads', express.static('uploads'));    //   alone index use folder uploads  


app.use('/api', uploadImgRoute);       //    NN_8  next to upload Imag using Multer
app.use("/api/products", productRoute);
//...


app.listen(5300, ()=>{
    console.log('Back-end work sucessfully')
});




