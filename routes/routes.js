const express = require('express') //imports express framework
const ToDo = require('../models/todo'); //imports todo.js file from models

const router = express.Router() //use express Router from express library

//home route
router.get("/", function(req,res){ 
    ToDo.find({},function(err,todoList){
        if(err)
            console.log(err)
        else
        res.render("index.ejs", {todoList:todoList});
    })
});

//add to do route
router.post("/newtodo",function(req,res){
    var newtodoitem = new ToDo({
        name: req.body.item
    })

    ToDo.create(newtodoitem,function(err,ToDo){
        if(err)
            console.log(err)
        else{
            res.redirect("/");
            console.log("To Do item added");
        }
    })
});

//delete a single to do item route
router.post("/deletetodo/:id",function(req,res){
    let todoID = req.params.id;

    ToDo.deleteOne({"_id":todoID},function(err,ToDo){
        if(err)
            console.log(err)
        else{
            res.redirect("/");
            console.log("item deleted")
        }
    })
});

//delete all to do items route
router.post("/deletealltodos",function(req,res){
    ToDo.deleteMany({},function(err,ToDo){
        if(err)
            console.log(err)
        else{
            res.redirect("/");
            console.log("all items deleted")
        }
    })
});

//catch all other routes
router.get("*", function(req,res){ 
    res.send("<h1>Invalid Page<h1>");
});


module.exports = router