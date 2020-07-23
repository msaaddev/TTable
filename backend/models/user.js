const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => console.log('MongoDB Connection successful'))
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

// getting user information
const getUserData = async (token) => {
    const user = decodingJWT(token);
    const userData = await User.find({ password: user.password });
    if (userData.length === 0) return false;
    return userData;
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
    createUser: createUser,
    getUserData: getUserData,
};
