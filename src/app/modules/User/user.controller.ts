import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserServices } from './user.service';
import AppError from '../../errors/AppError';

const userRegister = catchAsync(async (req, res) => {
  console.log(req.file)
  const user = await UserServices.createUser(req.body, req.file?.path as string);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Created Successfully',
    data: user,
  });
});

const getAllUsers = catchAsync(async (req, res) => {
  const users = await UserServices.getAllUsersFromDB(req.query);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'Users Retrieved Successfully',
    data: users,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const user = await UserServices.getSingleUserFromDB(req.params.id);
  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: 'User Retrieved Successfully',
    data: user,
  });
});


const updateUserDB = catchAsync(async (req, res) => {
  const { id } = req.params;
  if (!id) {
    throw new AppError(httpStatus.NOT_FOUND, "User ID not found");
  }
  const updateData = req.body;
  const result = await UserServices.updateUser(req.user, updateData, req.file?.path);
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: 200,
    message: "Update User successfull",
    data: result,
  });
});


export const UserControllers = {
  getSingleUser,
  userRegister,
  getAllUsers,
  updateUserDB
};
