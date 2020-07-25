const express = require('express');
const router = express.Router();
const courseModel = require('../models/courses');
const roomModel = require('../models/room');
const scheduleModel = require('../models/schedule');
const algo = require('../utils/algo');
const flush = require('../utils/flush');

/* reserved timeslots for different sections */
let reservedHrs = [
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

let availableHrs = [
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

// route for sending courses and schedule into database
router.post('/', async (req, res) => {
    await courseModel.createCourseData(req.body);

    const roomData = await roomModel.getRoomData(req.body.userAccount);
    for (let i = 0; i < req.body.courseIDArr.length; i++) {
        algo(
            req.body.courseIDArr[i],
            req.body.creditHrsArr[i],
            roomData[0].sectionArr,
            reservedHrs,
            availableHrs
        );
    }
    const obj = {
        userAccount: req.body.userAccount,
        schedule: reservedHrs,
    };

    availableHrs = JSON.parse(JSON.stringify(flush.availableHrs));
    reservedHrs = JSON.parse(JSON.stringify(flush.reservedHrs));
    await scheduleModel.createScheduleData(obj);
    res.send('Success');
});

// route for getting course information in the database
router.get('/', async (req, res) => {
    const data = await courseModel.getCourseData(req.query.email);

    if (data !== false) {
        res.send(data);
    } else {
        res.send('false');
    }
});

module.exports = router;
