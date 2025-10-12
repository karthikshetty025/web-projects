import React from 'react';
import { Movie } from "../types/types";

// Sample movie data array
const movies: Movie[] = [
    { title: "Spider-Man: No Way Home", genre: "Action", rating: 9 },
    { title: "The Conjuring", genre: "Horror", rating: 8 },
    { title: "Inception", genre: "Sci-Fi", rating: 9 },
  ];

const MoviesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to the Movies Page</h1>
    </div>
  );
};

export default MoviesPage;
