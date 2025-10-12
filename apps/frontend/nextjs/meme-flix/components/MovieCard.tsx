import React from "react";
import { Movie } from "../types/types";

// Define the props structure for the MovieCard component
interface Props {
  movie: Movie;
}

const MovieCard: React.FC<Props> = ({ movie }) => {
  return (
    // Card container
    <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 m-2 w-64">
      {/* Movie title */}
      <h2 className="text-xl font-bold text-white">{movie.title}</h2>

      {/* Movie genre */}
      <p className="text-gray-300">Genre: {movie.genre}</p>

      {/* Movie rating */}
      <p className="text-yellow-400">Rating: {movie.rating}/10</p>
    </div>
  );
};


export default MovieCard;
