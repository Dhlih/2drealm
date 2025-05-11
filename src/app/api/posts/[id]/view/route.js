import { connectDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function PATCH(req, { params }) {
  try {
    const { id } = await params;

    await connectDB();
    await Post.updateOne({ _id: new ObjectId(id) }, { $inc: { totalView: 1 } });

    return NextResponse.json("berhasil diupdate");
  } catch (error) {
    console.log(error);
    return NextResponse.json("Terjadi error");
  }
}
