/**
 *
 *
 *
 * @param {courseID} - integer that stores the ID of course
 * @param {creditHrs} - integer that stores the credit hours of a course
 * @param {section} - array that stores sections taking that course
 * @param {availableHrs} - array that stores available time slots for each section
 * @param {reservedHrs} - array that stores reserved time slots for each section
 * @return {object} - that contains arrays with scheduled classes with respect to sections
 */

const scheduler = (courseID, creditHrs, section, availableHrs, reservedHrs) => {
    /* A conditions to check the best place of the day */
    /* A loop starts and it schedule a lecture of a common teacher at timeslot 2 on Monday. Now it can't schedule the same course class on the same timeslot on the same day. It must have to schedule it somewhere else */
    /* We need to start a loop on available hours. How many times? Number of sections. */
    /* 2 Loops: 3 Times because we have three sections. Another loop that iterates over availableHrs and sets reserrved hours */

    let days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

    /* this loop is to iterate over sections */
    for (let i = 0; i < section.length; i++) {
        let nextDay = 0;
        let day = days[nextDay];

        /* this loop is to iterate over timeslots */
        for (let j = 0; j < 5; j++) {
            let index = Math.floor(Math.random() * 5);

            /* this loop checks whether we have any available timeslot in a day */
            while (
                availableHrs[[i]][day][0] === 0 &&
                availableHrs[[i]][day][1] === 0 &&
                availableHrs[[i]][day][2] === 0 &&
                availableHrs[[i]][day][3] === 0 &&
                availableHrs[[i]][day][4] === 0
            ) {
                nextDay++;
                day = days[nextDay];
            }

            /* this loop checks whether we have a clash with other sections or not */
            while (
                reservedHrs[[0]][day][index] === courseID ||
                (reservedHrs[[1]][day][index] === courseID &&
                    reservedHrs[[2]][day][index] === courseID)
            ) {
                index = Math.floor(Math.random() * 5);
            }

            /* setting the timeslot */
            availableHrs[[i]][day][index] = 0;
            reservedHrs[[i]][day][index] = courseID;
        }
    }
};
