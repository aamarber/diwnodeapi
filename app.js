require("dotenv").config();

const express = require('express');

const jwt = require("jsonwebtoken");

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

        // Create token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
          );
    
          // save user token
          user.token = token;
    
          // user
          res.status(200).json(user.token);
    }
    catch(error){
        console.error(error);
    }
});