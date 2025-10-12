import React,{useState} from "react";
import { Movie } from "../types/types";

// Define the props structure for the MovieCard component
interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
    const [added,setAdded]=useState(false);//useState for watchlist button
  return (
    // Card container
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 m-2 w-64 flex flex-col justify-between h-72">
      {/* Movie title */}
      <h2 className="text-xl font-bold text-white">{movie.title}</h2>

      {/* Movie genre */}
      <p className="text-gray-300">Genre: {movie.genre}</p>

      {/* Movie rating */}
      <p className="text-yellow-600">Rating: {movie.rating}/10</p>

      
      {/* Add to Watchlist button */}
      <button
        className={`mt-3 px-3 py-1 rounded text-white ${
          added ? "bg-gray-500 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
        } transition`}
        onClick={() => setAdded(true)}
        disabled={added}
      >
        {added ? "Added!" : "Add to Watchlist"}
      </button>
    </div>
  );
};


export default MovieCard;
