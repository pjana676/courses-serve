var mongoose=require('./../modelsConnection').mongoose
var Schema =mongoose.Schema;



/*
 * define a schema design of coursesSchema collection to store Data into mongoDB
 * using mongoose schema and create a collection model
 * that we can use through another file
 */
var coursesSchema = new Schema({
    name:{
        type: String,
        default: ""
    },
    date:{
        type: String,
        default: ""
    },
    description:{
        type: String,
        default: ""
    },
    domain:[{
        type: String,
        default: ""
    }],
    chapters:[{
        name:{
            type:String,
            default:''
        },
        text:{
            type:String,
            default:''
        },
    }],
    is_active:{
        type: Boolean,
        default: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    update_at: {
        type: Date,
        default: Date.now
    }
})


module.exports=mongoose.model('courses', coursesSchema);