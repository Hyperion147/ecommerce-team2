const express = require('express');
const router = express.Router();

// GET /api/products - Get all products
router.get('/', (req, res) => {
  res.json({ message: 'Get all products - to be implemented' });
});

// GET /api/products/:id - Get single product
router.get('/:id', (req, res) => {
  res.json({ message: `Get product ${req.params.id} - to be implemented` });
});

// POST /api/products - Create new product (admin)
router.post('/', (req, res) => {
  res.json({ message: 'Create product - to be implemented' });
});

// PUT /api/products/:id - Update product (admin)
router.put('/:id', (req, res) => {
  res.json({ message: `Update product ${req.params.id} - to be implemented` });
});

// DELETE /api/products/:id - Delete product (admin)
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete product ${req.params.id} - to be implemented` });
});

module.exports = router;