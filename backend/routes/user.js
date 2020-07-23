const express = require('express');
const router = express.Router();

// route for getting user
router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;
