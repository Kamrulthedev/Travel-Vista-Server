import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import bcryptJs from 'bcryptjs';
import { User } from '../User/user.model';
import { TLoginUser } from './auth.interface';
import { createToken, verifyToken } from './auth.utils';
import { USER_Role } from '../User/user.constant';


const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.findOne({ email: payload.email });

  if (!user) {
    const user = await registerUser(payload);

    const jwtPayload = {
      email: user?.user?.email,
      role: user?.user?.role,
    };

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string,
    );

    return {
      accessToken,
      user,
    };
  } else {
    if (payload.password) {
      const isPasswordMatched = await bcryptJs.compare(
        payload.password,
        user.password,
      );

      if (!isPasswordMatched) {
        throw new AppError(httpStatus.NOT_FOUND, 'Password Incorrect!');
      }
    }
    const jwtPayload = {
      email: user.email,
      role: user.role,
      _id: user._id,
    };

    const accessToken = createToken(
      jwtPayload,
      config.jwt_access_secret as string,
      config.jwt_access_expires_in as string,
    );

    return {
      user,
      accessToken,
    };
  }
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = verifyToken(token, config.jwt_refresh_secret as string);
  const { email } = decoded;
  // checking if the user is exist
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  return {
    accessToken,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const registerUser = async (userData: TLoginUser, url?: any) => {
  if (userData.password) {
    userData.password = await bcryptJs.hash(
      userData.password,
      Number(config.bcrypt_salt_rounds),
    );
  }
  userData.profileImg = url;

  const user = await User.create({
    ...userData,
    role: USER_Role.USER,
  });

  const jwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  return {
    user,
    accessToken,
  };

};


export const AuthServices = {
  loginUser,
  refreshToken,
  registerUser,
};
