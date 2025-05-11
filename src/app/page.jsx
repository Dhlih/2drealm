"use client";
import SideMenu from "./components/SideMenu";
import FeedCard from "./components/FeedCard";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get("/api/posts");
      setPosts(response.data);
    };
    getData();
  }, []);
  return (
    <>
      <div className="flex relative mt-[6rem] ">
        <SideMenu className="fixed top-0 overflow-y-auto" />
        {/* main content */}
        <div className="py-[3rem] md:pl-[27%] px-[1.5rem] md:w-[85%] w-full">
          <h1 className="text-3xl font-semibold mb-[1.5rem]">Latest Feeds</h1>

          {posts?.map((post) => (
            <FeedCard key={post._id} post={post} />
          ))}
          <button className="bg-secondary w-full p-2 text-center rounded-lg cursor-pointer hover:bg-white/10">
            Load more
          </button>
        </div>
      </div>
    </>
  );
}
