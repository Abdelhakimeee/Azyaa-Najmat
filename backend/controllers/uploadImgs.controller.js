import multer from "multer";
import path from 'path';



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

    export default upload;

