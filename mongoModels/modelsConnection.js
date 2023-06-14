
var { mongoose } = require('mongoose');
const { DB_USERNAME, DB_PASSWORD, DB_URI, DB_NAME } = process.env;

const mongoOptions = {
    user: DB_USERNAME,
    pass: DB_PASSWORD,
    dbName: DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

// module.exports = mongoose.createConnection(DB_URI, mongoOptions)
module.exports = () => {
    mongoose
        .connect(DB_URI, mongoOptions)
        .then(() => {
            console.log('Mongodb connected....');
        })
        .catch(err => console.log(err.message));

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to db...');
    });

    mongoose.connection.on('error', err => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose connection is disconnected...');
    });

    process.on('SIGINT', async () => {
        // Perform cleanup tasks, such as closing database connections
        await mongoose.connection.close();
        process.exit(0);
    });

    process.on('SIGTERM', async () => {
        // Perform cleanup tasks, such as closing database connections
        await mongoose.connection.close();
        process.exit(0);
    });
};