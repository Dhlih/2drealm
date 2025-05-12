"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { getPostById } from "@/app/action/post";

import ReplyCard from "@/app/components/ReplyCard";
import PostDetail from "@/app/components/PostDetail";
import { getSession } from "@/app/lib/auth";
import { createComment } from "@/app/action/comment";

const PostsId = () => {
  const commentRef = useRef(null);
  const params = useParams();

  const [post, setPost] = useState("");
  const [isComment, setIsComment] = useState(false);
  const [user, setUser] = useState("");

  const postId = params.id;

  useEffect(() => {
    const getData = async () => {
      const data = await getPostById(postId);
      setPost(data);
    };

    const getUser = async () => {
      const session = await getSession();
      setUser(session.user);
    };

    getData();
    getUser();
  }, []);

  const scrollToComment = () => {
    commentRef.current.focus();
  };

  return (
    <div className="w-full mt-[7rem] py-[2rem] px-[2rem]">
      <div className="max-w-[800px] mx-auto ">
        {post && (
          <PostDetail
            post={post}
            scrollToComment={scrollToComment}
            setIsComment={setIsComment}
          />
        )}

        {/* reply */}
        <div className="space-y-[1rem]">
          <h3 className="font-medium text-xl">{post.totalReplies} Replies</h3>

          {isComment && (
            <form
              className="flex flex-col items-end mb-[2rem]"
              action={createComment}
            >
              <textarea
                type="text"
                rows={4}
                placeholder="Tulis pendapatmu..."
                ref={commentRef}
                name="message"
                className=" outline-none resize-none bg-secondary w-full p-6 rounded-lg"
              />
              <div className="space-x-[2rem]">
                <button
                  onClick={() => {
                    setIsComment(false);
                  }}
                  className="text-sm cursor-pointer"
                >
                  Cancel
                </button>
                <button className="text-black bg-accent font-medium py-2 px-6 mt-[1rem] rounded-md text-sm cursor-pointer">
                  Kirim
                </button>
              </div>
            </form>
          )}

          <ReplyCard post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostsId;
