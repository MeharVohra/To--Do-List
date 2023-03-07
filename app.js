const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const { urlencoded } = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static("public"));

var items = [];
app.get("/", function(req, res){
    var today = new Date();
    // The getDay() method returns the day of the week (from 0 to 6) of a date
    // 1- monday, 0- sunday
    // var currentDay = today.getDay(); 
    var options = {
        weekday : "long",
        day : "numeric",
        month: "long"
    }
    
    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindofDay : day, newItem : items});
   
});

app.post("/", function(req,res){
    var item = req.body.add_to_list;
    items.push(item);
    res.redirect("/");
    
});

app.get("/about", function(req, res){
    res.render("about");
});

app.listen(3000, function(req, res){
    console.log("handling request on port 3000");
});