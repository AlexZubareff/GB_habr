
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');



 function auth(req, res, next) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const err = errors.array();
        console.log(err);
        return res.status(455).json({ errors: errors.array() })
    }



    // console.log(req.body);

    // const token = jwt.sign(
    // {
    //     email:req.body.email,
    //     fullName: 'Jason Born',
    // },
    // 'secretcode'
    // );

    // res.json({
    //     success:true,
    //     token,
    // })

      User.findOne({ where: { email: req.body.email, password: req.body.password } }).then(user => {
        if (!user) {
            return Promise.reject({ statusCode: 422, message: "Не верный пароль или логин!" })
        } else {
            res.json(user);
        }
    })
        .catch((error) => {
            res.status(error.statusCode || 400).json({ error: error.message });
        })
}

module.exports = {
    auth
}