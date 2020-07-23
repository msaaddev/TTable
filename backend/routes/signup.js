const express = require('express');
const user = require('../models/user');
const router = express.Router();

// route for getting user
router.post('/', async (req, res) => {
    const result = await user.createUser(req.body);
    if (!result) res.send('false');
    else res.send(true);
});

module.exports = router;
