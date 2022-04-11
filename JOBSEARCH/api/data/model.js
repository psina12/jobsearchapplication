const mongoose = require("mongoose");
const locationSchema = mongoose.Schema({
    country:{
        type:String,
        required:true },
    state:{
        type:String,
        required:true }
 });
const jobSchema = mongoose.Schema({
    title:{
        type:String,
        required: true},
    salary:{
        type:String,
        required: true },
    description:{
        type:String,
        required: true },
    experience:{
        type:String,
        required: true },
    skills:[],
    postDate:{
        type:Date,
        required: Date.now },
    location:[locationSchema]
    });

    

mongoose.model(process.env.MODEL_NAME, jobSchema, process.env.COLL_NAME);