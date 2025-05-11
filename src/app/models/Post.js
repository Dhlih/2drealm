import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    writer: String,
    totalView: Number,
    totalLikes: Number,
    totalReplies: Number,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Post || mongoose.model("Post", postSchema);
