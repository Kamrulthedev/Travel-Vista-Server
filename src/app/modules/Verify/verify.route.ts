import { Router } from 'express';
import { VerifyControllar } from './verify.controllar';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../User/user.constant';

const router = Router();

router.post('/create', auth(USER_ROLE.USER), VerifyControllar.VerifyAccoountDB);

router.get(
  '/accounts',
  auth(USER_ROLE.ADMIN),
  VerifyControllar.getAllVerifyAccountDB
);

router.get(
  '/my-verify-account',
  auth(USER_ROLE.ADMIN, USER_ROLE.USER),
  VerifyControllar.getMyVerifayAccoountDB
);

export const VerifyRoutes = router;
