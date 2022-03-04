const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const studentData = require('./models/StudentData');
const employeeData = require('./models/employeeData');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


/*app.post('/api/students', async(req,res)=>{
    let student = new studentData(req.body);
    let result = await student.save();
    res.json(result);
});*/


//getAll students
app.get('/api/students', async(req,res)=>{
    studentData.find({payment:"Succesful"})
     .then(function(student){
         res.send(student);
     });
});


//Get single student by id
app.get('/api/students/:id',(req,res)=>{

    try{
        const id=req.params.id;
        studentData.findOne({_id:id})
          .then((student)=>{
           res.send(student);
        })
    }
    catch(error){
        res.status(500).json({message: "err"})

    }   
      
});

//Search student
app.get('/api/search-student', async(req,res)=>{
    studentData.find({payment:"Succesful"})
     .then(function(student){
         res.send(student);
     });
});

/*app.post('/api/employee', async(req,res)=>{
    let employee = new employeeData(req.body);
    let result = await employee.save();
    res.json(result);
});*/

//getAll employee
app.get('/api/employee', async(req,res)=>{
    employeeData.find({status:"approved"})
     .then(function(employee){
         res.send(employee);
     });
});

//Get single employee by id
app.get('/api/employee/:id',(req,res)=>{

    try{
        const id=req.params.id;
        employeeData.findOne({_id:id})
          .then((employee)=>{
           res.send(employee);
        })
    }
    catch(error){
        res.status(500).json({message: "err"})

    }   
      
});

//Search employee
app.get('/api/search-employee', async(req,res)=>{
    employeeData.find({status:"approved"})
     .then(function(employee){
         res.send(employee);
     });
});

//Add student
app.post('/api/add-stud', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new studentData(req.body);
        let data = await mydata.save();
        console.log("Successfully Added Data");
        res.send("Successfully Added Data");
    }
    catch (err) {
        console.log(err);
    }
});

//delete student
app.post('/api/delete-stud', async (req, res) => {
    try {
        let result = await studentData.deleteOne({name:req.body.name});
        console.log("Successfully Deleted : "+req.body.name);
        res.send("Deleted"+req.body.name);
    }
    catch (err) {
        console.log(err);
    }
});

//Aprove student
app.post('/api/approve-stud', async (req, res) => {
    try {
        console.log(req.body);
        let mydata = new studentData(req.body);
        let data = await mydata.save();
        console.log("Successfully Approved Data");
        res.send("Successfully Approved Data");
    }
    catch (err) {
        console.log(err);
    }
});

//Decline student
app.post('/api/decline-stud', async (req, res) => {
    try {
        let result = await studentData.deleteOne({name:req.body.name});
        console.log("Successfully Declined User : "+req.body.name);
        res.send("Declined"+req.body.name);
    }
    catch (err) {
        console.log(err);
    }
});    

//Update employee
    app.post('/api/emp-update', async (req, res) => {
        try {
            
            console.log(req.body);
            let mydata = new employeeData(req.body);
            let data = await mydata.save();
            console.log("Successfully Added Data");
            res.send("Successfully Added Data");
                                                                          
        }
        catch (err) {
            console.log(err);
        }
    });

    //delete employee
    app.post('/api/delete-emp', async (req, res) => {
        try {
            let result = await employeeData.deleteOne({name:req.body.name});
            console.log("Successfully Deleted : "+req.body.name);
            res.send("Deleted"+req.body.name);
        }
        catch (err) {
            console.log(err);
        }
    });

    //approve employee
    app.post('/api/approve-emp', async (req, res) => {
        try {
            console.log(req.body);
            let mydata = new employeeData(req.body);
            let data = await mydata.save();
            console.log("Successfully Approved Data");
            res.send("Successfully Approved Data");
        }
        catch (err) {
            console.log(err);
        }
    });

    //decline employee
    app.post('/api/decline-emp', async (req, res) => {
        try {
            let result = await employeeData.deleteOne({name:req.body.name});
            console.log("Successfully Declined User : "+req.body.name);
            res.send("Declined"+req.body.name);
        }
        catch (err) {
            console.log(err);
        }
    
    

});



app.listen(5000, (req,res)=>{
    console.log("Server is running....");
})