import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import FeedCard from "./components/FeedCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex relative mt-[6rem]">
        <SideMenu className="fixed top-0 overflow-y-auto" />
        {/* main content */}
        <div className="py-[3rem] md:pl-[30%] px-[1.5rem] w-[80%]">
          <h1 className="text-3xl font-semibold mb-[1.5rem]">Latest Feeds</h1>
          <FeedCard />
          <FeedCard />
          {[...Array(10)].map((_, i) => (
            <FeedCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
