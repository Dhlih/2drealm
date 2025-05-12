import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    message: String,
    username: String,
    userId: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Comment ||
  mongoose.model("Comment", commentSchema);
