const express = require('express');
const user = require('../models/user');
const router = express.Router();

// route for getting user
router.get('/', async (req, res) => {
    const userData = await user.getUserData(req.query.token);

    if (userData === false) res.send('false');
    else {
        const obj = {
            email: userData[0].userAccount,
            username: userData[0].username,
        };
        res.send(obj);
    }
});

module.exports = router;
