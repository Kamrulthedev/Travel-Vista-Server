import mongoose from "mongoose";
import { TVerify } from "./verify.interface";

const verifySchema = new mongoose.Schema<TVerify>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true, 
    },
    name: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    email: String, 
    addess: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);


export const Verify = mongoose.model('Verify', verifySchema);
