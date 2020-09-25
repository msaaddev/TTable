/**
 *
 *
 *
 * @param {courseID} - integer that stores the ID of course
 * @param {creditHrs} - integer that stores the credit hours of a course
 * @param {section} - array that stores sections taking that course
 * @param {availableHrs} - array that stores available time slots for each section
 * @param {reservedHrs} - array that stores reserved time slots for each section
 */

module.exports = (courseID, creditHrs, section, reservedHrs, availableHrs) => {
    /* reserved timeslots for different sections */

    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    /* this loop is to iterate over sections */
    for (let i = 0; i < section.length; i++) {
        let nextDay = 0;

        /* this loop is setting scheduling courses on different timeslots depending upon credit hours */
        for (let j = 0; j < creditHrs; j++) {
            let day = days[nextDay];
            let index = Math.floor(Math.random() * 5);

            /* this loop executes if all the timeslots are booked in a day */
            while (
                availableHrs[[i]][day][0] === 0 &&
                availableHrs[[i]][day][1] === 0 &&
                availableHrs[[i]][day][2] === 0 &&
                availableHrs[[i]][day][3] === 0 &&
                availableHrs[[i]][day][4] === 0
            ) {
                nextDay++;
                if (nextDay > 4) nextDay = 0;
                day = days[nextDay];
            }

            /* this loop executes to check whether we have a clash with
            other sections and it also avoids course overwrite */
            while (
                reservedHrs[[0]][day][index] === courseID ||
                reservedHrs[[1]][day][index] === courseID ||
                reservedHrs[[2]][day][index] === courseID ||
                reservedHrs[[i]][day][index] !== 0
            ) {
                index = Math.floor(Math.random() * 5);
                nextDay++;
                if (nextDay > 4) nextDay = 0;
                day = days[nextDay];
            }

            /* setting the timeslot */
            availableHrs[[i]][day][index] = 0;
            reservedHrs[[i]][day][index] = courseID;

            nextDay++;
            if (nextDay > 4) nextDay = 0;
        }
    }
};
