const express = require('express');
const app = express();
const room = require('./routes/room');
const courses = require('./routes/courses');
const user = require('./routes/user');
const schedule = require('./routes/schedule');
const signup = require('./routes/signup');
const cors = require('cors');

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use('/roominfo', room);
app.use('/courses', courses);
app.use('/login', user);
app.use('/getschedule', schedule);
app.use('/signup', signup);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
