const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vandana:Norka123@cluster0.iyl8o.mongodb.net/mySample?retryWrites=true&w=majority');

let MongooseSchema = mongoose.Schema;
const employeeSchema=new MongooseSchema({

    name: String,
    role:String,
    email:String,
    password:String,
    status:String
});

var employeeData = mongoose.model('employeedata',employeeSchema);
module.exports = employeeData;