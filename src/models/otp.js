import mongoose from "mongoose";
const otpSchema = mongoose.Schema(
  {
    number: {
      type: String,
      required: true,
    },

    otp: {
      type: String,
      required: true,
    },

    expireAt: {
      type: Date,
      required: true,
      index: {
        expires: 0,
      },
    },

    attempts: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

const collection = mongoose.model("otp", otpSchema);

export default collection;
