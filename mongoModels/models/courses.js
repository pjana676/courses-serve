var connection = require('./../modelsConnection')
const { Schema } = require('mongoose');


/*
 * define a schema design of coursesSchema collection to store Data into mongoDB
 * using mongoose schema and create a collection model
 * that we can use through another file
 */
var coursesSchema = new Schema({
    name: {
        type: String,
        default: ""
    },
    date: {
        type: Date,
        set: d => new Date(d * 1000)
    },
    dateAsNumber: {
        type: Number,
        set: d => new Date(d * 1000)
    },
    description: {
        type: String,
        default: ""
    },
    domain: [{
        type: String,
        default: ""
    }],
    chapters: [{
        name: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        rating: {
            type: Number,
            default: 0
        },
    }],
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})

coursesSchema.index(
    { dateAsNumber: 1 },
    { unique: true }
);


// pre hook to hash plain password
coursesSchema.pre('save', function savePreHook(next) {
    if (this.isNew) {
        const user = this;
        user.dateAsNumber = user.date
        // continue
        next();
    } else {
        next();
    }
});

module.exports = connection.model('courses', coursesSchema);