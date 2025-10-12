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