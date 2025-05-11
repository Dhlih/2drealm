import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: String,
    password: String,
    username: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models?.User || mongoose.model("User", userSchema);
