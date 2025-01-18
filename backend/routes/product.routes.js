import express from 'express';
import upload from '../controllers/uploadImgs.controller.js';
import authenticateToken from '../auth/auth.js';
import { getProducts,getproduct,updateProduct,
deleteProduct, addProduct, searchProduct
 } from '../controllers/product.controller.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getproduct);
router.put('/:id', authenticateToken, updateProduct)
router.post('/', authenticateToken, upload.single('img'), addProduct)
router.delete('/:id', authenticateToken, deleteProduct );
router.get('/:key', searchProduct);


export default router;
