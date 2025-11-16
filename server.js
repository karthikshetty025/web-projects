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

// Starting the server and listening on PORT 5000
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
