const express = require('express');
const courseModel = require('../models/courses');
const router = express.Router();

// route for sending courses into database
router.post('/', (req, res) => {
    courseModel.createCourseData(req.body);
});

// route for getting course information in the database
router.get('/', async (req, res) => {
    const data = await courseModel.getCourseData(req.query.email);
    console.log(data);
    if (data !== false) res.send(data);
    else res.send('false');
});

module.exports = router;
