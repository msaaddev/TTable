const express = require('express');
const roomModel = require('../models/room');
const router = express.Router();

// route for sending rooms information in the database
router.post('/', async (req, res) => {
    await roomModel.createRoomData(req.body);
    res.send('Success');
});

// route for getting room information in the database
router.get('/', async (req, res) => {
    const data = await roomModel.getRoomData(req.query.email);
    if (data !== false) res.send(data);
    else {
        res.send('false');
    }
});

module.exports = router;
