"use server";
import { connectDB } from "@/app/lib/mongodb";
import Post from "@/app/models/Post";
import { ObjectId } from "mongodb";

export async function getPosts() {
  try {
    await connectDB();
    const posts = await Post.aggregate([
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

    const serializedPosts = posts.map((post) => ({
      ...post,
      _id: post._id.toString(),
      createdAt: post.createdAt?.toISOString(),
      updatedAt: post.updatedAt?.toISOString(),
    }));

    return serializedPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostById(id) {
  try {
    await connectDB();
    console.log(id);

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

    const p = post[0];

    const serializedPost = {
      ...p,
      _id: p._id.toString(),
      createdAt: p.createdAt?.toISOString(),
      updatedAt: p.updatedAt?.toISOString(),
    };

    return serializedPost;
  } catch (error) {
    return {
      error,
      msg: "Gagal mengupdate",
    };
  }
}

export async function createPost(formData) {
  try {
    await connectDB();

    const title = formData.get("title");
    const description = formData.get("description");
    const category = formData.get("category");
    const writer = formData.get("writer");

    if (!title || !description || !category || !writer) {
      return;
    }

    const post = await Post.create({
      title,
      description,
      category,
      writer,
    });
  } catch (error) {
    return {
      error,
      msg: "Gagal membuat",
    };
  }
}

export async function updateView(id) {
  try {
    await connectDB();

    await Post.updateOne({ _id: new ObjectId(id) }, { $inc: { totalView: 1 } });
  } catch (error) {
    return {
      error,
      msg: "Gagal mengupdate",
    };
  }
}

export async function updateLike(id, isLike) {
  if (isLike) {
    try {
      await connectDB();

      await Post.updateOne(
        { _id: new ObjectId(id) },
        { $inc: { totalLikes: 1 } }
      );
    } catch (error) {
      return {
        error,
        msg: "Gagal mengupdate",
      };
    }
  }
}
