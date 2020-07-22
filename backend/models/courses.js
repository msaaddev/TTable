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

const createCourseData = async () => {
    const courseData = new Course({
        userAccount: 'moosaraza@gmail.com',
        courseInfo: [
            {
                teacher: 'Samyan',
                courseName: 'AOA',
                section: 'A',
                session: 18,
                creditHrs: '3',
            },
            {
                teacher: 'Samyan',
                courseName: 'AOA',
                section: 'B',
                session: 18,
                creditHrs: '3',
            },
            {
                teacher: 'Awais',
                courseName: 'DBMS',
                section: 'A',
                session: 18,
                creditHrs: '3',
            },
        ],
        courseNameArr: ['AOA', 'DBMS'],
        courseIDArr: ['101', '102'],
        creditHrsArr: ['3', '3'],
    });

    // finding if there is already a document exists with this email
    const response = await Course.find({ userAccount: 'moosaraza@gmail.com' }).count();

    // if there is then update that document in the database otherwise save the information
    if (response > 0) {
        await updateCourseData(courseData);
        return;
    }
    const result = await courseData.save();
};

// getting course data of a user
const getCourseData = async (email) => {
    const courseData = await Course.find({ userAccount: email }).select({
        courseInfo: 1,
        courseNameArr: 1,
        courseIDArr: 1,
        creditHrsArr: 1,
    });
    if (courseData.length === 0) return console.log('Nothing found!');
    console.log(courseData);
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

getCourseData('mrsaadirfan@gmail.com');
