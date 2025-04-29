import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";
import FeedCard from "./components/FeedCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex relative mt-[5rem]">
        <SideMenu className="fixed top-0 overflow-y-auto" />
        {/* Main content dengan padding kiri */}
        <div className="flex-1 py-[3rem] md:pl-[25%] px-[1.5rem] ">
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
