import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import FeedCard from "./components/FeedCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div></div>
      <div className="flex">
        <SideMenu />
        {/* main content */}
        <div className="md:w-[50%] w-full py-[3rem] md:ml-[-2rem] md:px-0 px-[1.5rem] relative">
          <h1 className="text-3xl font-semibold mb-[1.5rem]">Latest Feeds</h1>
          <FeedCard />
          <FeedCard />
        </div>
      </div>
    </>
  );
}
