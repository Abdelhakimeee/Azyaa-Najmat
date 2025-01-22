import express from 'express';
import upload from '../services/uploadImgs.service.js';
import { getProducts,getproduct,updateProduct,
deleteProduct, addProduct, searchProduct
 } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts); // god
router.get('/:id', getproduct);// god 

router.put('/:id', updateProduct)   // next with frontend
router.post('/', upload.single('img'), addProduct) // next with frontend
router.delete('/:id', deleteProduct );  // next with frontend
router.get('/:key', searchProduct);  // next with frontend


export default router;
