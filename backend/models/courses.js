const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => console.log('MongoDB Connection successful'))
    .catch((err) => console.log(err));

// defining schema of our course information
const courseInfo = new mongoose.Schema({
    userAccount: String,
    courseInfo: [
        {
            teacher: String,
            courseName: String,
            courseID: String,
            section: String,
            session: Number,
            creditHrs: String,
        },
    ],
    courseNameArr: [String],
    courseIDArr: [String],
    creditHrsArr: [String],
});

// creating a Course class based on our courseInfo schema
const Course = mongoose.model('CourseInfo', courseInfo);

const createCourseData = async (obj) => {
    const courseData = new Course(obj);

    // finding if there is already a document exists with this email
    const response = await Course.find({ userAccount: courseData.userAccount }).count();

    // if there is then update that document in the database otherwise save the information
    if (response > 0) {
        await updateCourseData(courseData);
        return;
    }
    const result = await courseData.save();
};

/**
 *
 * @param {email} - string that is used to find data
 */
const getCourseData = async (email) => {
    const courseData = await Course.find({ userAccount: email }).select({
        courseInfo: 1,
        courseNameArr: 1,
        courseIDArr: 1,
        creditHrsArr: 1,
    });
    if (courseData.length === 0) return false;
    return courseData;
};

/**
 *
 * @param {courseData} - object that has updated course information
 */
const updateCourseData = async ({
    userAccount,
    courseInfo,
    courseNameArr,
    courseIDArr,
    creditHrsArr,
}) => {
    try {
        const result = await Course.updateOne(
            { userAccount: userAccount },
            {
                $set: {
                    courseInfo,
                    courseNameArr,
                    courseIDArr,
                    creditHrsArr,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createCourseData,
    getCourseData,
};
