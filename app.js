require("dotenv").config();

const express = require('express');

const app = express();

app.use(express.json());

module.exports = app;

// LOGIC FROM HERE ON

// importing user context
const usersDB = require("./data/usersdb");


app.post("/login", (req, res) => {
    try{
        const { email, password } = req.body;

        if(!email || !password){
            res.status(400).send("Both password and email are required");
            return;
        }

        const user = usersDB.find(email);

        if(!user || user.password !== password){
            res.status(400).send("Email or password are not correct");
            return;
        }

        res.status(200).send("Login success!");
    }
    catch(error){
        console.error(error);
    }
});