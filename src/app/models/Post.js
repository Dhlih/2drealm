import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    writer: String,
    totalView: { type: Number, default: 0 },
    totalLikes: { type: Number, default: 0 },
    totalReplies: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.Post || mongoose.model("Post", postSchema);
