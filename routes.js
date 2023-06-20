const express = require('express');
const router = express.Router();
const itemsController = require('./controllers/itemsController');

// GET /api/items
router.get('/items', itemsController.getAllItems);

// GET /api/items/:id
router.get('/items/:id', itemsController.getItemById);

// POST /api/items
router.post('/items', itemsController.createItem);

// PUT /api/items/:id
router.put('/items/:id', itemsController.updateItem);

// DELETE /api/items/:id
router.delete('/items/:id', itemsController.deleteItem);

module.exports = router;
