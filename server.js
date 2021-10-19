var express = require("express");
var app = express();
var fs = require("fs")
var list=[];
app.get("/",(req,res)=>{
    fs.readdir(__dirname,function(err,files){
        if(err) throw err;
        files.forEach((file)=>{
            const extension = file.split(".").pop();
            list.push({"file":file,"extension":extension});
        })
    res.send(list);
    })
})

app.listen(3000,(req,res)=>{
    console.log("Server listening on 3000")
})