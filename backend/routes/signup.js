const express = require('express');
const user = require('../models/user');
const router = express.Router();

// route for creating user
router.post('/', async (req, res) => {
    const result = await user.createUser(req.body);
    if (!result) res.status(404).send('false');
    else res.status(200).send(true);
});

module.exports = router;
