const express = require('express');
const roomModel = require('../models/room');
const router = express.Router();

// route for sending rooms information in the database
router.post('/', (req, res) => {
    roomModel.createRoomData(req.body);
});

// route for getting room information in the database
router.get('/', async (req, res) => {
    console.log(req.query.email);
    const data = await roomModel.getRoomData(req.query.email);
    if (data !== false) res.send(data);
    else res.status(404).send('Nothing Found!');
});

module.exports = router;
