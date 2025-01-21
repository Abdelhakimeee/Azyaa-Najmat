import express from 'express';
import upload from '../services/uploadImgs.service.js';

const router = express.Router();

router.post('/', upload.single('img'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "لم يتم تحميل اي صورة" });
        }
        res.json({ message: "تم تحميل الصورة بنجاح", file: req.file });
    } catch (error) {
        res.status(500).json({ message: "حدث خطأ أثناء تحميل الصورة", error: error.message });
    }
});

export default router;