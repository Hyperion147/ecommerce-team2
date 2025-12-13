const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'UrbanThreads Backend API is running!' });
});

// Products routes (placeholder)
app.get('/api/products', (req, res) => {
  res.json({ message: 'Products endpoint - to be implemented' });
});

app.get('/api/products/:id', (req, res) => {
  res.json({ message: `Product ${req.params.id} endpoint - to be implemented` });
});

// Cart routes (placeholder)
app.post('/api/cart', (req, res) => {
  res.json({ message: 'Add to cart endpoint - to be implemented' });
});

// Orders routes (placeholder)
app.post('/api/orders', (req, res) => {
  res.json({ message: 'Create order endpoint - to be implemented' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});