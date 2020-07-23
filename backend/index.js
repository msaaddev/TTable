const express = require('express');
const app = express();
const room = require('./routes/room');
const courses = require('./routes/courses');
const user = require('./routes/user');
const schedule = require('./routes/schedule');

// middlewares
app.use(express.json());

// routes
app.use('/room', room);
app.use('/courseinfo', courses);
app.use('/login', user);
app.use('/schedule', schedule);

// port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));
