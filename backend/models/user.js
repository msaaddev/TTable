const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => {})
    .catch((err) => console.log(err));

// defining schema of user information
const userInfo = new mongoose.Schema({
    userAccount: String,
    password: String,
    username: String,
});

// creating a User class based on our userInfo schema
const User = mongoose.model('UserInfo', userInfo);

/**
 *
 *
 * stores user information in the database
 */
const createUser = async (obj) => {
    const userData = new User(obj);

    // finding if there is already a document exists with this credentials
    const response = await User.find({ userAccount: obj.userAccount }).countDocuments();

    // If there is already a user document exists then send an error
    if (response > 0) {
        return false;
    }
    const result = await userData.save();
    return true;
};

/**
 *
 * @param {data} - data to be updated with in the database
 */
const updateUser = async ({ userAccount, password }) => {
    try {
        const result = await User.updateOne(
            { userAccount: userAccount },
            {
                $set: {
                    userAccount,
                    password,
                },
            }
        );
    } catch (error) {
        console.log(error);
    }
};

// getting user information
const getUserData = async (token) => {
    const user = decodingJWT(token);
    if (user !== undefined) {
        const userData = await User.find({ password: user.password });
        if (userData.length === 0) return false;
        return userData;
    } else return false;
};

/**
 *
 * @param {token} - JWT token
 */
const decodingJWT = (token) => {
    const { userData } = jwt.verify(token, 'secret');
    return userData;
};

module.exports = {
    createUser,
    getUserData,
    updateUser,
};
