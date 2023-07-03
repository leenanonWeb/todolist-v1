//jshint esversion:6
const express = require("express");
const bodyParser =  require("body-parser");
const  app = express();
const port = 3000;

app.get("/",(req,res)=>{
res.send("<h1>server is up and running..</h1>");
})











app.listen(port,()=>{
console.log("server is running on port 3000.");
});