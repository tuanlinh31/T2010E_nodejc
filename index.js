console.log("hello world!!")
const express = require("express");
const app = express();/// xay nha
const port = process.env.PORT || 5000;// khai bao cong vao
app.listen(port,function(){
    console.log("Server is running..");
})

// tao routing
app.use(express.static("public"));
app.get("/",function (req,res){
    res.sendFile(__dirname +"/public/aboutus.html");
})
//them 1 routing
app.get("/bongda",function (req,res){
    res.send("trang bong da");
})

app.get("/quanao",function (req,res){
    res.sendFile(__dirname +"/public/Session7.html")
})