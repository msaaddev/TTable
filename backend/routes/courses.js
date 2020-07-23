const express = require('express');
const courseModel = require('../models/courses');
const router = express.Router();

// route for sending courses into database
router.post('/', (req, res) => {
    courseModel.createCourseData(req.body);
    console.log(req.body);
});

// route for getting course information in the database
router.get('/', async (req, res) => {
    const data = await courseModel.getCourseData(req.query.email);
    if (data !== false) res.send(data);
    else res.statusCode(404).send('Nothing Found!');
});

module.exports = router;
