
var mongoose = require('mongoose');
const { DB_USERNAME, DB_PASSWORD, DB_URI } = process.env;

const mongoOptions = {
    user: DB_USERNAME,
    pass: DB_PASSWORD,
};

module.exports = mongoose.createConnection(DB_URI, mongoOptions)