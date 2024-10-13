import express from 'express';
import { PostControllar } from './post.controllar';
import { USER_ROLE } from '../User/user.constant';
import auth from '../../middlewares/auth';
import { ValidatedPost } from './post.validation';
import validateRequest from '../../middlewares/validateRequest';
import { parseBody } from '../../middlewares/bodyParser';
import { multerUpload } from '../../config/multer.config';
const router = express.Router();

router.post('/create', auth(USER_ROLE.ADMIN, USER_ROLE.USER),
multerUpload.single('PostImg'),
parseBody,
validateRequest(ValidatedPost.createPostValidationSchema), PostControllar.createPost);


router.get('/:id', PostControllar.getPostById);
router.get('/', PostControllar.getAllPosts);
router.put('/:id', PostControllar.updatePost);
router.delete('/:id', PostControllar.deletePost);

export const PostRoutes = router;
