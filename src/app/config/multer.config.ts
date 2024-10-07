import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import { cludinaryUpload } from "./clodinary.config";



const storage = new CloudinaryStorage({
    cloudinary: cludinaryUpload
});

export const multerUpload = multer({storage});