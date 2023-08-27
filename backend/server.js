const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

console.log(users);
// Simulate user registration
app.post('/signup', (req, res) => {
  const { username, password } = req.body;

  // Check if username already exists
  if (users.some(user => user.username === username)) {
    return res.status(400).json({ message: 'Username already exists' });
  }

  // Store user data
  users.push({ username, password });
 
  res.status(200).json({ message: 'User registered successfully' });
});

// Simulate user authentication
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
    return res.status(200).json({ message: 'Login successful' });
  } else {
    return res.status(401).json({ message: 'Login failed' });
  }
});

app.get('/users', (req, res) => {
  res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
