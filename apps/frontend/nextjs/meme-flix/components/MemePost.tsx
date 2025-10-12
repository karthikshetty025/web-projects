import React,{useState} from "react";
import { Meme } from "../types/types";

// Define props interface for MemePost
interface Props {
  meme: Meme;
}

const MemePost: React.FC<Props> = ({ meme }) => {
    const [likes,setLikes]=useState(meme.upvotes);
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md p-4 m-4 w-80 hover:scale-105 transition-transform duration-300">
      {/* Meme image */}
      <img
        src={meme.imageUrl}
        alt={meme.title}
        className="w-full h-64 object-cover rounded-lg mb-3"
      />

      {/* Meme title */}
      <h2 className="text-xl font-bold text-white mb-1">{meme.title}</h2>

      {/* Display number of likes */}
      <p className="text-yellow-400">Likes: {likes}</p>

      {/* Like button */}
      <button
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:bg-blue-700 transition"
        onClick={() => setLikes(likes + 1)}
      >
        Like
      </button>
    </div>
  );
};

export default MemePost;
