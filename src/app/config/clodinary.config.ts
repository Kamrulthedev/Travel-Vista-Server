import { v2 as cloudinary } from 'cloudinary';
import config from '.';

//Configaration
cloudinary.config({
  cloud_name: config.img_cloud_name,
  api_key: config.img_api_key,
  api_secret: config.img_api_secret,
});


export const cludinaryUpload = cloudinary;
