const Item = require('../models/Item');

// GET /api/items
async function getAllItems(req, res) {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// GET /api/items/:id
async function getItemById(req, res) {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// POST /api/items
async function createItem(req, res) {
    try {
      const { name, description } = req.body;
  
      // Log the request body to check the received data
      console.log(req.body);
  
      // Check if name and description are provided
      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
      }
  
      const newItem = new Item({ name, description });
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  
  
  async function updateItem(req, res) {
    try {
      const { name, description } = req.body;
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        { name, description },
        { new: true }
      );
  
      if (!updatedItem) {
        return res.status(404).json({ error: 'Item not found' });
      }
  
      console.log('Updated item:', updatedItem);
      res.json(updatedItem);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  

// DELETE /api/items/:id
async function deleteItem(req, res) {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
