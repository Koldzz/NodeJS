const express = require('express');
const router = express.Router();
const Person = require('./../models/person'); // Ensure the correct path to the model

// POST: Add a New Person
router.post('/', async (req, res) => {
    try {
        const data = req.body;

        // Validation for required fields
        if (!data.name || !data.work || !data.mobile) {
            return res.status(400).json({ error: 'Name, work, and mobile are required fields.' });
        }

        // Create and save the new person
        const newPerson = new Person(data);
        const savedPerson = await newPerson.save();
        res.status(201).json({ message: 'Person added successfully', person: savedPerson });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save person', details: error.message });
    }
});

// GET: Retrieve All Persons
router.get('/', async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json({ message: 'All persons retrieved successfully', persons });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch details', details: error.message });
    }
});

// GET: Retrieve Persons by Work Type
router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;

        // Validate workType
        const allowedWorkTypes = ['chef', 'waiter', 'manager'];
        if (!allowedWorkTypes.includes(workType)) {
            return res.status(400).json({ error: `Invalid work type. Allowed values: ${allowedWorkTypes.join(', ')}` });
        }

        // Fetch persons by work type
        const personsByWorkType = await Person.find({ work: workType });
        res.status(200).json({ message: `Persons with work type '${workType}' retrieved successfully`, persons: personsByWorkType });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch persons by work type', details: error.message });
    }
});

module.exports = router;
