const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const username = "admin";
const password = "admin";

app.get("/", function(req, res){
    res.redirect("/login");
});

app.get("/login", function(req, res){
    res.render("login");
});

app.post("/login", function(req, res){
    const { username: userInput, password: passwordInput } = req.body;
    if (userInput === username && passwordInput === password){
        res.send("Login successful");
    } else if (userInput === username && passwordInput!== password){
        res.send("Invalid password");
    } else {
        res.send("User not registered");
    }
});

app.listen(8080, function(){
    console.log("Server running on port 8080");
});
