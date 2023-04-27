import mongoose from "mongoose";
const Schema = mongoose.Schema


const student = new Schema({
    firstname: String,
    lastname: String,
    matricNo: String,
    age: Number,
    course: String,
    department: String,
    courseCode: String, 
    faculty: String,
    level: String,  
});


const studentModel = mongoose.model("student", student);
module.exports = studentModel;