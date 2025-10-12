import React from "react";
import MemePost from "../components/MemePost";
import { Meme } from "../types/types";

// Sample meme data
const memes: Meme[] = [
    {
      title: "When your code finally works",
      imageUrl: "https://i.imgflip.com/4/3vzej.jpg",
      upvotes: 420,
    },
    {
      title: "CSS be like...",
      imageUrl: "https://i.imgflip.com/4/3vzej.jpg",
      upvotes: 666,
    },
    {
      title: "When you fix a bug by accident",
      imageUrl: "https://i.imgflip.com/4/3vzej.jpg",
      upvotes: 911,
    },
  ];
  
  

const HomePage: React.FC = () => {
  return (
    // Page container
    <div className="min-h-screen bg-gray-900 p-8">
      
      {/* Page heading */}
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Meme Feed 😂
      </h1>

      {/* Container for meme cards */}
      <div className="flex flex-wrap justify-center">
        {memes.map((meme, index) => (
          // Render each MemePost component
          <MemePost key={index} meme={meme} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
