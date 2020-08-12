const express = require('express');
const router = express.Router();
const courseModel = require('../models/courses');
const scheduleModel = require('../models/schedule');
const format = require('../utils/format');

// route for getting schedule
router.get('/', async (req, res) => {
    const courseData = await courseModel.getCourseData(req.query.email);
    const scheduleData = await scheduleModel.getScheduleData(req.query.email);

    const formatData = format(
        scheduleData[0].schedule,
        courseData[0].courseIDArr,
        courseData[0].courseNameArr,
        courseData[0].courseInfo
    );

    res.status(200).send(formatData);
});

module.exports = router;
