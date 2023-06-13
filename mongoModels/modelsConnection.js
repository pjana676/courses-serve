
var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, function (error) {
    if (error) {
        console.log(error);
    }
});
module.exports = {
    mongoose:mongoose
}