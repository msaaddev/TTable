const express = require('express');
const app = express();
app.use(express.json());

app.get('/login', (res, req) => {
    console.log('Working');
});

// port
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on Port: ${port}`));