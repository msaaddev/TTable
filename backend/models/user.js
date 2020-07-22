const mongoose = require('mongoose');

mongoose
    .connect('mongodb://localhost/schedule')
    .then(() => console.log('MongoDB Connection successful'))
    .catch((err) => console.log(err));

// defining schema of user information
const userInfo = new mongoose.Schema({
    userAccount: String,
    password: String,
});

// creating a User class based on our userInfo schema
const User = mongoose.model('UserInfo', userInfo);

/**
 *
 *
 * stores user information in the database
 */
const createUser = async () => {
    const userData = new User({
        userAccount: 'moosaraza@gmail.com',
        password: '0MRBAGlMbLKNqZl$X',
    });

    // finding if there is already a document exists with this credentials
    const response = await User.find({ userAccount: 'moosaraza@gmail.com' }).count();

    // If there is already a user document exists then send an error
    if (response > 0) {
        console.log('Cannot create more than one user for same email address.');
        return;
    }
    const result = await userData.save();
};

// getting user information
const getUserData = async (email) => {
    const userData = await User.find({ userAccount: email });
    if (userData.length === 0)
        return console.log('Cannot find user account. Create an account first.');
    console.log(userData);
};

createUser('moosaraza@gmail.com');
