/* eslint-disable no-useless-escape */
// models/User.ts
import mongoose, { Schema } from 'mongoose';
import { validateEmail } from './user.utils';
import { IUser } from './user.interface';

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      required: true,
      validate: [validateEmail, 'Please fill a valid email address'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please fill a valid email address',
      ],
    },
    phone: { type: String },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    profileImg: { type: String },
    address: { type: String },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    passwordChangedAt: {
      type: Date,
    },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model<IUser>('User', userSchema);
