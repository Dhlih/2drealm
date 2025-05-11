import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

const ReplyCard = ({ post, isComment }) => {
  return (
    <div>
      <div className="bg-secondary mt-[1rem] p-6 rounded-lg">
        {/* user profile */}
        <div className="flex justify-between items-center mb-[0.6rem]">
          <div className="flex items-center space-x-[1rem]">
            <div className="w-10 h-10 rounded-full bg-white"></div>
            <div>
              <span className="block text-sm font-medium text-white">
                {post.writer}
              </span>
              <span className="text-white/75 text-sm">{post.dateCreate}</span>
            </div>
          </div>
        </div>

        <p className="max-w-[90%] mt-4">
          Kl menurutku sih yang paling blowing Code Geass, tiba-tiba si Lelouch
          ngorbanin dirinya biar dunia jadi lebih baik. Bener-bener gak bisa
          ditebak pemikiran authornya
        </p>

        {/* metrics */}
        <div className="flex items-center space-x-[1rem] mt-4">
          <div className="flex items-center space-x-3">
            <FaRegHeart className="cursor-pointer" />
            <span>170</span>
          </div>

          <button className="cursor-pointer">Reply</button>
        </div>
      </div>
    </div>
  );
};

export default ReplyCard;
