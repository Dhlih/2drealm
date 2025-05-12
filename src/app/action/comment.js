"use server";

import { connectDB } from "../lib/mongodb";
import Comment from "../models/Comment";
import { ObjectId } from "mongodb";

export async function createComment(formData) {
  try {
    await connectDB();

    const message = formData.get("message");
    const username = formData.get("username");
    const userId = formData.get("userId");

    await Comment.create({
      message,
      username,
      userId,
    });
  } catch (error) {
    return {
      error,
      msg: "Gagal membuat",
    };
  }
}
