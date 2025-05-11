"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import ReplyCard from "@/app/components/ReplyCard";
import PostDetail from "@/app/components/PostDetail";

const PostsId = () => {
  const [post, setPost] = useState("");
  const [isComment, setIsComment] = useState(false);
  const commentRef = useRef(null);

  const params = useParams();
  const postId = params.id;

  console.log(postId);

  console.log(postId);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/api/posts/${postId}`);
      setPost(response.data);
    };

    getData();
  }, []);

  const scrollToComment = () => {
    commentRef.current.focus();
  };
  return (
    <div className="w-full mt-[7rem] py-[2rem] px-[2rem]">
      <div className="max-w-[900px] mx-auto ">
        {post && (
          <PostDetail
            post={post}
            scrollToComment={scrollToComment}
            setIsComment={setIsComment}
          />
        )}

        {/* reply */}
        <div className="space-y-[1rem]">
          <h3 className="font-medium text-xl">55 Replies</h3>

          {isComment && (
            <div className="flex flex-col items-end mb-[2rem]">
              <textarea
                type="text"
                rows={4}
                placeholder="Tulis pendapatmu..."
                ref={commentRef}
                className=" outline-none text-sm resize-none bg-secondary w-full p-6 rounded-lg"
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
                <button className="text-black bg-accent py-2 px-6 mt-[1rem] rounded-md text-sm cursor-pointer">
                  Kirim
                </button>
              </div>
            </div>
          )}

          <ReplyCard post={post} />
        </div>
      </div>
    </div>
  );
};

export default PostsId;
