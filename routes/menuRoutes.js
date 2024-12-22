const express = require('express');
const router = express.Router();
const Menu = require('./../models/menu'); // Ensure the correct path to the model

// POST: Add a New Menu Item
router.post('/', async (req, res) => {
    try {
        console.log('Request Body:', req.body); // Debugging log
        const menu = req.body;

        // Create and save the new menu item
        const newMenu = new Menu(menu);
        const savedMenu = await newMenu.save();
        res.status(201).json(savedMenu);
    } catch (error) {
        console.error('Error:', error); // Debugging log
        res.status(500).json({ error: 'Failed to save Menu', details: error.message });
    }
});

// GET: Retrieve All Menu Items
router.get('/', async (req, res) => {
    try {
        const menuDetails = await Menu.find();
        res.status(200).json(menuDetails);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch details', details: error.message });
    }
});

module.exports = router;
