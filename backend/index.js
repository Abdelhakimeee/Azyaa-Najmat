import express from "express";
import cors from 'cors';
import authenticateToken from './auth/auth.js';
import './db/config.models.js';  // connection to DB
import productRoute from "./routes/product.routes.js";
import uploadImgRoute from "./routes/uploadImg.routes.js";  //   NN_8  next to upload Imag using Multer
import userRoutes from './routes/user.routes.js';
import dotenv from "dotenv";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json())
app.use(cors())


app.use('/auth',authenticateToken)
app.use('/uploads', express.static('uploads'));    //   alone index use folder uploads  

app.use('/api', uploadImgRoute);       //    NN_8  next to upload Imag using Multer
app.use("/api/products", productRoute);
app.use('/users', userRoutes);
//...


app.listen(PORT, ()=>{
    console.log(`Back-end work sucessfully`)
});
// npm run dev       # to start the server 



