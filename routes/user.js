const express = require('express');
const User = require('../models/User'); // Adjust path as needed
const router = express.Router();

router.post('/users', async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;