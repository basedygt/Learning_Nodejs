const express = require("express");
const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
});

app.get("/checkname/:name", function(req, res){
    var name = req.params.name;
    var age = req.params.age;
    res.render("checkname", {
        name: name,
        age: age
    });
});

app.get("/data", function(req, res){
    const data = [
        {name: "Cat", occupation: "Conqueror the world"},
        {name: "Dog", occupation: "Protect the owner"},
        {name: "Rabbit", occupation: "Hop"},
    ]

    const id = req.params.id

    res. render("data",{
        data: data
    });
})

app.get("*", function(req, res){
    res.render("404");
});

app.listen("8080", function(){
    console.log("Listening on Port 8080");
});
