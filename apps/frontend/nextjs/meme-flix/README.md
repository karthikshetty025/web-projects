# Phase 1 - Step 3: Next.js & TypeScript Exercises

## Task
Set up a Next.js project with TypeScript and create a new page route `/movies`. Define TypeScript interfaces for consistent data shapes.


## Exercise 1 – Project Setup & /movies Page
- Project: `meme-flix`
- Create a `/movies` page inside `pages/movies.tsx`
- Page content:
  - Heading (`<h1>`) centered on screen
  - Styled with Tailwind CSS
- Verified route works at: `http://localhost:3000/movies`

**Learning / Notes:**
- Practiced Next.js page routing
- Used Tailwind CSS in Next.js pages
- Learned functional React components with TypeScript

## Exercise 2 – TypeScript Interfaces
- File: `types/types.ts`
- Defined interfaces:
  - `Movie` → `title`, `genre`, `rating`
  - `Meme` → `title`, `imageUrl`, `upvotes`
- Interfaces used to enforce type safety across pages/components

**Learning / Notes:**
- Practiced TypeScript type definitions
- Prepared project for future pages and dynamic data handling
- Organized types in a separate folder for clarity


# Phase 1 - Step 4: React Components & Props

## Task

Understand how to create reusable components and pass data using props in React.

## Exercise 1 – MovieCard Component

* File: `components/MovieCard.tsx`
* Accepts a `movie` object (of type `Movie`) as a prop
* Displays:

  * Movie title (`<h2>`)
  * Genre (`<p>`)
  * Rating (`<p>`)
* Used on `/movies` page to render at least three different movies
* Styled with Tailwind CSS for card layout and typography

**Learning / Notes:**

* Practiced creating reusable React components
* Learned passing props with TypeScript interfaces
* Used Tailwind CSS for responsive card design
* Kept component logic separate from page rendering


## Exercise 2 – MemePost Component

* File: `components/MemePost.tsx`
* Accepts a `meme` object (of type `Meme`) as a prop
* Displays:

  * Meme image (`<img>`)
  * Meme title (`<h2>`)
  * Upvotes (`<p>`)
* Used on **home page (`pages/index.tsx`)** to render a feed of memes
* Styled with Tailwind CSS for layout, hover effects, and text readability

**Learning / Notes:**

* Practiced dynamic rendering of components from an array
* Learned mapping and passing props for multiple elements
* Tailwind CSS applied for visual consistency and card styling
* Maintained clean folder structure and modular code