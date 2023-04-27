//import express from 'express';
//import jwt from 'jsonwebtoken';


const express = require('express');
const app = express();
app.use(express.json());

const userController = require('./controllers/userController');
const authController = require('./controllers/authController');

const userValidators = require('./services/userValidators');







app.get('/', (req, res, next) => {
    res.send('Hello!333333');
})


app.get('/auth/login', userValidators.loginUserValidation, authController.auth);
app.post('/auth/register', userValidators.registerUserValidation, userController.create);


app.listen(7777, (err) => {
    if (err) {
        return console.log(err);
    }

    console.log('Server started on 7777 port')
});
