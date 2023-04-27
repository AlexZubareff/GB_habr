
const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const { validationResult } = require('express-validator');



 function create(req, res, next) {

    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(400).json({ errors: errors.array() })
        }
        User.findOne({ where: { email: req.body.email } }).then(user => {
            if (user) {
                return Promise.reject({ statusCode: 422, message: "This email is alredy used!" })
            } else {
    
    
                const { name, email, password } = req.body;
                const saltRounds = 10;
                const passwordHash =  bcrypt.hashSync(password, saltRounds);
    
    
                return User.create({ name, email, password: passwordHash });
    
            }
        })
            .then(user => {
                res.json(user);
            })
        
    } catch (error) {
        res.status(error.statusCode || 400).json({ error: error.message });
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


}

module.exports = {
    create
}