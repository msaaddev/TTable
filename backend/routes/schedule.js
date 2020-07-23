const express = require('express');
const router = express.Router();
const roomModel = require('../models/room');
const courseModel = require('../models/courses');
const scheduleModel = require('../models/schedule');
const algo = require('../utils/algo');
const format = require('../utils/format');

/* reserved timeslots for different sections */
const reservedHrs = [
    {
        monday: [0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0],
    },
    {
        monday: [0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0],
    },
    {
        monday: [0, 0, 0, 0, 0],
        tuesday: [0, 0, 0, 0, 0],
        wednesday: [0, 0, 0, 0, 0],
        thursday: [0, 0, 0, 0, 0],
        friday: [0, 0, 0, 0, 0],
    },
];

/* available timeslots for different section */

const availableHrs = [
    {
        monday: [1, 2, 3, 4, 5],
        tuesday: [1, 2, 3, 4, 5],
        wednesday: [1, 2, 3, 4, 5],
        thursday: [1, 2, 3, 4, 5],
        friday: [1, 2, 3, 4, 5],
    },
    {
        monday: [1, 2, 3, 4, 5],
        tuesday: [1, 2, 3, 4, 5],
        wednesday: [1, 2, 3, 4, 5],
        thursday: [1, 2, 3, 4, 5],
        friday: [1, 2, 3, 4, 5],
    },
    {
        monday: [1, 2, 3, 4, 5],
        tuesday: [1, 2, 3, 4, 5],
        wednesday: [1, 2, 3, 4, 5],
        thursday: [1, 2, 3, 4, 5],
        friday: [1, 2, 3, 4, 5],
    },
];

// route for getting schedule
router.get('/', async (req, res) => {
    const roomData = await roomModel.getRoomData(req.query.email);
    const courseData = await courseModel.getCourseData(req.query.email);
    const data = await scheduleModel.getScheduleData(req.query.email);

    // if a schedule exist then sending it to the client side
    if (data) {
        const formatData = format(
            data[0].schedule,
            courseData[0].courseIDArr,
            courseData[0].courseNameArr
        );
        res.send(formatData);
    } else {
        for (let i = 0; i < courseData[0].courseIDArr.length; i++)
            algo(
                courseData[0].courseIDArr[i],
                courseData[0].creditHrsArr[i],
                roomData[0].sectionArr,
                reservedHrs,
                availableHrs
            );

        const formatData = format(
            reservedHrs,
            courseData[0].courseIDArr,
            courseData[0].courseNameArr
        );

        res.send(formatData);
        const obj = {
            userAccount: req.query.email,
            schedule: reservedHrs,
        };
        scheduleModel.createScheduleData(obj);
    }
});

module.exports = router;
