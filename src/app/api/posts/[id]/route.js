import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  try {
    await connectDB();

    const { id } = await params;
    const post = await Post.aggregate([
      { $match: { _id: new ObjectId(id) } },
      {
        $addFields: {
          dateCreate: {
            $dateToString: {
              format: "%d-%m-%Y",
              date: "$createdAt",
              timezone: "Asia/Jakarta",
            },
          },
        },
      },
    ]);
    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
