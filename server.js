const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
