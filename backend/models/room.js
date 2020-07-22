const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => console.log('MongoDB Connection successful'))
    .catch((err) => console.log(err));

// defining schema of our room information
const roomInfo = new mongoose.Schema({
    userAccount: String,
    roomInfo: [{ room: String, section: String, session: Number }],
    roomArr: [String],
    sectionArr: [String],
    sessionArr: [Number],
});

// creating a Room class based on our roomInfo schema
const Room = mongoose.model('RoomInfo', roomInfo);

/**
 *
 * stores room information in the database
 */
const createRoomData = async () => {
    const roomData = new Room({
        userAccount: 'ehmad@gmail.com',
        roomInfo: [
            { room: '1', section: 'A', session: 18 },
            { room: '2', section: 'B', session: 18 },
        ],
        roomArr: ['1', '2', '3'],
        sectionArr: ['A', 'B', 'C'],
        sessionArr: [18],
    });

    // finding if there is already a document exists with this email
    const response = await Room.find({ userAccount: 'ehmad@gmail.com' }).count();

    // if there is then update that record otherwise save it
    if (response > 0) {
        await updateRoomData(roomData);
        return;
    }
    const result = await roomData.save();
};

// getting room data of a user
const getRoomData = async (email) => {
    const roomData = await Room.find({ userAccount: email }).select({
        roomInfo: 1,
        roomArr: 1,
        sectionArr: 1,
    });
    console.log(roomData);
};

/**
 *
 * @param {roomData} - object that has updated room information
 */
const updateRoomData = async ({ userAccount, roomInfo, roomArr, sectionArr, sessionArr }) => {
    try {
        const result = await Room.updateOne(
            { userAccount: userAccount },
            {
                $set: {
                    roomInfo: roomInfo,
                    roomArr: roomArr,
                    sectionArr: sectionArr,
                    sessionArr: sessionArr,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};

createRoomData('mrsaadirfan@gmail.com');
