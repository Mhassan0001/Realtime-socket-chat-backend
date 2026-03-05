import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    roomId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "room",
    },

    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "auth",
    },

    message: {
      type: String,
      required: true,
    },

    read: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const collection = mongoose.model("chat", schema);

export default collection;
