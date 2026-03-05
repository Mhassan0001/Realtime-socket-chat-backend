import mongoose from "mongoose";
const schema = mongoose.Schema(
  {
    member: [
      {
        required: true,
        type: mongoose.Schema.Types.ObjectId,
        ref: "auth",
      },
    ],
  },
  { timestamps: true },
);

const collection = mongoose.model("room", schema);

export default collection;
