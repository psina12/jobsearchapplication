const mongoose = require("mongoose");
const Job = mongoose.model(process.env.MODEL_NAME);

const _responseAllJob = function(err, result, res, response){
    if(err){
         response.status =500;
         response.message =err;
      }
     else{
        response.status=200;
        response.message = result;
     }
   res.status(response.status).json(response.message);
  }  
const getAll = function (req, res) {
    let response = _getDefaultResponse();
    let offset = 0;
    let count = 5;
    let maxCount = 10;
    if (req.query && req.query.offset) {
      offset = parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
      count = parseInt(req.query.count, 10);
    }
    if (isNaN(offset) || isNaN(count)) {
      response.status = 400;
      response.message = process.env.MSG_RES_OFFSET;
    }
    if (count > 10) {
      count = maxCount;
    }
    console.log(response.status, response.message);
    if (response.status == 200) {
        Job.find()
        .skip(offset)
        .limit(count)
        .exec((err, result) =>
        _responseAllJob(err, result, res, response)
        );
    } else {
      res.status(response.status).json(response.message);
    }
  };
const _responseAddOneJob = function(err, result, res, response){
    if(err){
         response.status =500;
         response.message =err;
      }
     else{
        response.status=200;
        response.message = result;
     }
   res.status(response.status).json(response.message);
  };
const AddOneJob = function(req,res){
let response = _getDefaultResponse();
  const newJob={
    title:req.body.title,
    salary:req.body.title,
    description:req.body.description,
    experience:req.body.experience,
    skills:req.body.skills,
    postDate:req.body.postDate
    
  };
 Job.create(newJob,(err,result)=>_responseAddOneJob(err,result,res,response));
}
const _responseGetOne = function(res,err,result,response){
    if(err){
         response.status =500;
         response.message =err;
      }

      else if(!result){
          response.status=404;
          response.message="country Not found";
      }

     else{
        response.status=200;
        response.message = result;
     }
   res.status(response.status).json(response.message);
  }
const getOne = function(req,res){
    
    let response = _getDefaultResponse();

    const jobId = req.params.jobId;

    if(mongoose.isValidObjectId(jobId))
    {
    Job.findById(jobId).exec((err,result)=> _responseGetOne(res,err,result,response));
    }
   else{

    res.status(400).json({error_message:"country not found"});
   }

  }
const _responseDeleteOne = function (res, err, result, response) {
    if (err) {
      res.status = 500;
      response.message = err;
    } else if (!result) {
      response.status = 404;
      response.message = process.env.MSG_RES_404_COUNTRY;
    } else {
      response.status = 200;
      response.message = "Country deleted Succesfully";
    }
    res.status(response.status).json(response.message);
  };
const deleteOne = function (req, res) {
    let response = _getDefaultResponse();
    const jobId = req.params.jobId;
    if (mongoose.isValidObjectId(jobId)) {
      Job.findByIdAndDelete(jobId).exec((err, result) =>
        _responseDeleteOne(res, err, result, response)
      );
    } 
    else {
      res.status(400).json({ error_message:"country not found"});
    }
  };
const _responseUpdateOne = function(err, result, res, response){
    if(err){
        response.status = 500;
        response.message = err;
    } else if(!result){
        response.status = 404;
        response.message = process.env.MSG_RES_404_Job;
    } else{
        response.status = 200;
        response.message = result;
    } 
    res.status(response.status).json(response.message);
  }
const _responseUpdateOneGet = function (err, result, req, res, response) {    
    if (err) {
      response.status = 500;
      response.message = err;
    } else if (!result) {
      response.status = 404;
      response.message = process.env.MSG_RES_404_Job;
    } 
    if (response.status == 200) {
      if(req.body.title) result.title = req.body.title;
      if(req.body.salary) result.salary=req.body.salary;
      if(req.body.description) result.salary=req.body.description;
      if(req.body.experience) result.salary=req.body.experience;
      if(req.body.postDate) result.salary=req.body.postDate;
      result.save((err, result) =>
        _responseUpdateOne(err, result, res, response)
      );
    } else {
      res.status(response.status).json(response.message);
    }
  };
const updateOne = function(req, res){
    let response = _getDefaultResponse();
    const jobId = req.params.jobId;
    if (mongoose.isValidObjectId(jobId)) {
      Job.findById(jobId)
        .exec((err, result) =>
          _responseUpdateOneGet(err, result, req, res, response)
        );
    } else {
      res.status(400).json("country is invalid");
    }
  } 
const _fullUpdateJob = function(result,req){
    result.title = req.body.title;
    result.salary=req.body.salary;
    result.description=req.body.description;
    result.experience=req.body.experience;
    result.postDate=req.body.postDate;
    return result;
  }
const _partialUpdateJob = function(result,req){
    result.title = req.body.title || result.title;
    result.salary=req.body.salary || result.salary;
    result.description=req.body.description || result.description;
    result.experience=req.body.experience || result.experience;
    result.postDate=req.body.postDate || result.postDate;
    return result;  
  }
const fullUpdateOne = function(req,res){
    updateOne(req,res,_fullUpdateJob);
  }
const partialUpdateOne = function(req,res){
    updateOne(req,res,_partialUpdateJob);
  }
function _getDefaultResponse(){ 
    const response = {
      status: 200,
      message: process.env.MSG_RES_DEFAULT,
    };
    return response;
  }
module.exports={
    getAll,getOne,AddOneJob,deleteOne,fullUpdateOne,partialUpdateOne
}