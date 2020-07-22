const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => console.log('MongoDB Connection successful'))
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
 *
 * stores schedule information in the database
 */
const createScheduleData = async () => {
    const scheduleData = new Schedule({
        userAccount: 'mrsaadirfan@gmail.com',
        schedule: [
            {
                monday: [0, 0, 101, 131, 0],
                tuesday: [131, 101, 0, 0, 141],
                wednesday: [101, 0, 121, 151, 151],
                thursday: [131, 121, 0, 0, 0],
                friday: [0, 0, 0, 141, 151],
            },
            {
                monday: [101, 121, 141, 151, 0],
                tuesday: [0, 0, 141, 131, 121],
                wednesday: [151, 131, 0, 101, 0],
                thursday: [101, 0, 0, 0, 131],
                friday: [0, 0, 0, 151, 0],
            },
            {
                monday: [141, 151, 131, 121, 101],
                tuesday: [141, 0, 131, 121, 151],
                wednesday: [0, 0, 131, 0, 101],
                thursday: [0, 0, 101, 0, 0],
                friday: [0, 151, 0, 0, 0],
            },
        ],
    });

    // finding if there is already a document exists with this email
    const response = await Schedule.find({ userAccount: 'mrsaadirfan@gmail.com' }).count();

    // if there is then update that document in the database otherwise save it
    if (response > 0) {
        await updateScheduleData(scheduleData);
        return;
    }
    const result = await scheduleData.save();
    console.log(result);
    console.log('Success!');
};

// getting schedule data of a user
const getScheduleData = async (email) => {
    const scheduleData = await Schedule.find({ userAccount: email }).select({
        schedule: 1,
    });
    if (scheduleData.length === 0) return console.log('Nothing found!');
    console.log(roomData);
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

createScheduleData();
