const mongoose = require('mongoose');

//Mongoose connection
mongoose.connect('mongodb+srv://vandana:Norka123@cluster0.iyl8o.mongodb.net/mySample?retryWrites=true&w=majority');

//Mongoose schema
let MongooseSchema=mongoose.Schema;
const studentSchema = new MongooseSchema({
    name:String,
    email:String,
    phone:String,
    address:String,
    qualification:String,
    passoutYear:String,
    skillset:String,
    employmentStatus:String,
    technologyTraining:String,
    year:String,
    course:String,
    payment:String,
    mark:String

});

//Model

var studentData = mongoose.model('studentdata', studentSchema );
module.exports = studentData;

