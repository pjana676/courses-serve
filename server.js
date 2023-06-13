
const express = require('express');
require('dotenv').config()

const course = require('./routes/course');

const app = express();

// Middleware to handle JSON body parsing
app.use(express.json());

app.use('/api', course)

const port = 8000;
var server = app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
module.exports = server