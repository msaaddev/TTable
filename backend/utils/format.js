module.exports = (reservedHrs, courseIDArr, courseNameArr) => {
    const formatedData = [
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
    const temp = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    day = temp[0];

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 5; j++) {
            day = temp[j];
            for (let k = 0; k < 5; k++) {
                const id = reservedHrs[[i]][day][k];
                if (id === 0) {
                    formatedData[[i]][day][k] = 'Free';
                } else {
                    const index = courseIDArr.indexOf(id);
                    formatedData[[i]][day][k] = courseNameArr[index];
                }
            }
        }
    }
    return formatedData;
};
