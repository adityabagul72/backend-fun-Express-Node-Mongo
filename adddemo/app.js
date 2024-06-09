const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Route to serve the HTML form
app.get('/', (req, res) => {
  res.send(`
    <form action="/add" method="post">
      <label for="num1">Number 1:</label>
      <input type="number" id="num1" name="num1" required><br><br>
      <label for="num2">Number 2:</label>
      <input type="number" id="num2" name="num2" required><br><br>
      <button type="submit">Add</button>
    </form>
  `);
});

// Route to handle form submission and calculate sum
app.post('/add', (req, res) => {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  if (isNaN(num1) || isNaN(num2)) {
    res.status(400).send('Invalid numbers');
  } else {
    const sum = num1 + num2;
    res.send(`The sum of ${num1} and ${num2} is ${sum}`);
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});