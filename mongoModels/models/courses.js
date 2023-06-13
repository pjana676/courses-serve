var connection = require('./../modelsConnection')
const { Schema } = require('mongoose');


/*
 * define a schema design of coursesSchema collection to store Data into mongoDB
 * using mongoose schema and create a collection model
 * that we can use through another file
 */
var coursesSchema = new Schema({
    title: {
        type: String,
        default: "",
        required: true
    },
    date: {
        type: Date,
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


module.exports = connection.model('courses', coursesSchema);