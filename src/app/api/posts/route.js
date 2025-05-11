import { NextResponse } from "next/server";
import { connectDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";

export async function GET() {
  try {
    await connectDB();
    const post = await Post.aggregate([
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

export async function POST(req) {
  try {
    await connectDB();

    const body = await req.json();
    const {
      title,
      description,
      category,
      writer,
      totalView,
      totalLikes,
      totalReplies,
    } = body;

    if (!title || !description || !category || !writer) {
      return NextResponse.json({ message: "Missing fields" }, { status: 500 });
    }

    await Post.create({
      title,
      description,
      category,
      writer,
      totalView,
      totalLikes,
      totalReplies,
    });

    return NextResponse.json({ message: "Post Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
