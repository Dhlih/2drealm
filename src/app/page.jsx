"use client";

import SideMenu from "./components/SideMenu";
import PostCard from "./components/PostCard";
import { getPosts } from "./action/post";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getPosts();
        console.log(data);
        setPosts(data || []);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className="flex relative mt-[6rem]">
        <SideMenu className="fixed top-0 overflow-y-auto" />
        <div className="py-[3rem] md:pl-[27%] px-[1.5rem] md:w-[85%] w-full">
          <h1 className="text-3xl font-semibold mb-[1.5rem]">Latest Feeds</h1>

          {posts.map(
            (
              post // Hapus posts.length > 0 && karena sudah dihandle oleh fallback
            ) => (
              <PostCard key={post._id} post={post} />
            )
          )}

          {posts.length > 0 && (
            <button className="bg-secondary w-full p-2 text-center rounded-lg cursor-pointer hover:bg-white/15">
              Load more
            </button>
          )}
        </div>
      </div>
    </>
  );
}
