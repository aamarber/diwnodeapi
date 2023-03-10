require("dotenv").config();

const express = require('express');

const app = express();

const cors = require('cors')

app.use(express.json());

app.use(cors());

module.exports = app;

require('./controllers/loginController');

require('./controllers/productsController');

app.use(express.static('public'))

const auth = require('./middleware/auth');

app.get('/welcome', (request, result) => {
    result.status(200).send("Welcome not logged in user!");
});

app.post('/welcome', auth, (request, result) => {
    result.status(200).send("Welcome logged in user!");
});

