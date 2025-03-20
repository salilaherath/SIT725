//Import Express
const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// GET endpoint to add two numbers
app.get("/add", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).send("Invalid numbers provided");
  }

  const sum = a + b;
  res.send(`<h3>Result: ${sum}</h1>`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
