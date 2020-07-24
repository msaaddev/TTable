const express = require('express');
const user = require('../models/user');
const jwt = require('jsonwebtoken');
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

// route for getting user
router.post('/', async (req, res) => {
    const { obj } = decodingJWT(req.body.token);
    const userData = {
        userAccount: obj.email,
        password: obj.oldPassword,
    };
    const token = jwt.sign({ userData }, 'secret');
    const result = await user.getUserData(token);

    if (result === false) res.send('false');
    else {
        const newData = {
            userAccount: obj.email,
            password: obj.newPassword,
        };
        await user.updateUser(newData);
        res.send('true');
    }
});

const decodingJWT = (token) => {
    const obj = jwt.verify(token, 'secret');
    return obj;
};

module.exports = router;
