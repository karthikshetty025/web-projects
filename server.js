// Importing the Express framework
const express = require("express");

// Creating an Express application
const app = express();

// Defining the port number for the server to run on
const PORT = 5000;

// Root route
app.get("/", (req, res) => {
  // Sending a simple text response
  res.send("Welcome to the MemeFlix API test!");
});

// GET /api/movies — returns a hardcoded list of movies
app.get("/api/movies", (req, res) => {
    const movies = [
      { id: 1, title: "Interstellar", rating: 9 },
      { id: 2, title: "Inception", rating: 8.8 },
      { id: 3, title: "The Dark Knight", rating: 9.1 }
    ];
  
    res.json(movies); // send the JSON array as response
  });
  
// Starting the server and listening on PORT 5000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
