const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule', { useNewUrlParser: true })
    .then()
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
 * @param {obj} - room object to be store in the database
 */
const createRoomData = async (obj) => {
    const roomData = new Room(obj);

    // finding if there is already a document exists with this email
    const response = await Room.find({ userAccount: roomData.userAccount }).countDocuments();

    // if there is then update that document otherwise save it
    if (response > 0) {
        await updateRoomData(roomData);
        return;
    }
    await roomData.save();
};

/**
 *
 * @param {email} - string that is used to find data
 */
const getRoomData = async (email) => {
    const roomData = await Room.find({ userAccount: email }).select({
        roomInfo: 1,
        roomArr: 1,
        sectionArr: 1,
    });
    if (roomData.length === 0) return false;
    return roomData;
};

/**
 *
 * @param {roomData} - object that has updated room information
 * Object destructuring has been applied on the parameters
 */
const updateRoomData = async ({ userAccount, roomInfo, roomArr, sectionArr, sessionArr }) => {
    try {
        const result = await Room.updateOne(
            { userAccount: userAccount },
            {
                $set: {
                    roomInfo,
                    roomArr,
                    sectionArr,
                    sessionArr,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createRoomData,
    getRoomData,
};
