const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(

);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
    
}

app.post("/signin", async function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    
})