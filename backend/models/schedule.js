const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule')
    .then()
    .catch((err) => console.log(err));

// defining schema of our schedule information
const scheduleInfo = new mongoose.Schema({
    userAccount: String,
    schedule: [
        {
            monday: [Number],
            tuesday: [Number],
            wednesday: [Number],
            thursday: [Number],
            friday: [Number],
        },
    ],
});

// creating a Schedule class based on our scheduleInfo schema
const Schedule = mongoose.model('ScheduleInfo', scheduleInfo);

/**
 *
 * stores schedule information in the database
 * @param {obj} - schedule to store in the database
 */
const createScheduleData = async (obj) => {
    const scheduleData = new Schedule(obj);

    // finding if there is already a document exists with this email
    const response = await Schedule.find({ userAccount: 'mrsaadirfan@gmail.com' }).countDocuments();

    // if there is then update that document in the database otherwise save it
    if (response > 0) {
        await updateScheduleData(scheduleData);
        return;
    }
    const result = await scheduleData.save();
    console.log(result);
    console.log('Success!');
};

/**
 *
 * @param {email} - string that is used to find data
 */
const getScheduleData = async (email) => {
    const scheduleData = await Schedule.find({ userAccount: email }).select({
        schedule: 1,
    });
    if (scheduleData.length === 0) return false;
    return scheduleData;
};

/**
 *
 * @param {scheduleData} - object that has updated schedule data
 * Object destructuring has been applied on the parameters
 */
const updateScheduleData = async ({ userAccount, schedule }) => {
    try {
        const result = await Schedule.updateOne(
            { userAccount: userAccount },
            {
                $set: {
                    schedule,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createScheduleData,
    getScheduleData,
};
