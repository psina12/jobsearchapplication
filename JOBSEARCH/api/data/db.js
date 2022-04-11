const mongoose = require("mongoose");
require("./model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected",()=>_handleconnection("mongoose connected"));
mongoose.connection.on("disconnected",(err)=>_handleconnection("mongoose connected"));

function _handleconnection(msg,err){
    console.log(msg,err);
}