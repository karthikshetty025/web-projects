// TypeScript interfaces for Movie and Meme

// Movie interface with title, genre, and rating
export interface Movie {
  title: string;
  genre: string;
  rating: number; // e.g., 1-10
}

// Meme interface with title, imageUrl, and upvotes
export interface Meme {
  title: string;
  imageUrl: string;
  upvotes: number;
}
