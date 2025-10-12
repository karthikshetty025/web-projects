import React from "react";
import MovieCard from "../components/MovieCard";
import { Movie } from "../types/types";
import "../styles/globals.css";


// Sample movie data array (using Movie interface)
const movies: Movie[] = [
  { title: "Spider-Man: No Way Home", genre: "Action", rating: 9 },
  { title: "The Conjuring", genre: "Horror", rating: 8 },
  { title: "Inception", genre: "Sci-Fi", rating: 9 },
];

const MoviesPage: React.FC = () => {
  return (
    // Page container
    <div className="min-h-screen bg-gray-900 p-6">
      {/* Page heading */}
      <h1 className="text-3xl font-bold text-white mb-6 text-center">Movies List</h1>

      {/* Movies grid */}
      <div className="flex flex-wrap justify-center">
        {movies.map((movie, idx) => (
          // Render MovieCard for each movie
          <MovieCard key={idx} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MoviesPage;
