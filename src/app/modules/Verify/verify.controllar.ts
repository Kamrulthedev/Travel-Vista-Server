import httpStatus from 'http-status';
import { catchAsync } from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { VerifyService } from './verify.service';

//post verify
const VerifyAccoountDB = catchAsync(async (req, res) => {
  const verifyData = req.body;
  const result = await VerifyService.verifyAccount(verifyData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Verify Successfully',
    data: result,
  });
});

//get all verify account
const getAllVerifyAccountDB = catchAsync(async (req, res) => {
  const result = await VerifyService.getAllVerifyAccount();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Verify Account retrieved successfully',
    data: result,
  });
});

const getMyVerifayAccoountDB = catchAsync(async (req, res) => {
  const userData = req.user.userId;
  const result = await VerifyService.getMyVerifayAccoount(userData);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'My Verify Account Retrieved Successfully',
    data: result,
  });
});

export const VerifyControllar = {
  VerifyAccoountDB,
  getAllVerifyAccountDB,
  getMyVerifayAccoountDB,
};
