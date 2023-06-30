
const { User } = require('../models');
const { Role } = require('../models');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {secret} = require('../config/config')

const generateToken = (id, role) => {

    const payload = 
        {
            id,
            role
        }
     
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}



const register = async (req, res, next) => {

    try {

        const pass = req.body.password;
        console.log(pass);

        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(pass, saltRounds);

        const userRole = await Role.findOne({where: {name: "User"}})
        console.log(userRole);



        const newUser = User.build({
            name: req.body.name,
            email: req.body.email,
            password: passwordHash,
            role_id: userRole.id
        })

        const user = await newUser.save();

        // const token = jwt.sign(
        //     {
        //         id: user.id,
        //     },
        //     config.secret,
        //     {
        //         expiresIn: '30d',
        //     },
        // );
        const token = generateToken(user.id, user.role_id)

        res.json({
            user,
            token
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Такой пользователь уже существует" });

    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ where: { email: req.body.email } });
        console.log(user);
        if (!user) {
            return res.status(403).json({
                // message: 'Неверный логин или паароль',
                message: 'Пользователь не найден',

            });
        }

        const isValidPass = await bcrypt.compare(req.body.password, user.password);

        if (!isValidPass) {
            return res.status(404).json({
                message: 'Неверный логин или паароль',

            });
        }

        // const token = jwt.sign(
        //     {
        //         id: user.id,
        //     },
        //     config.secret,
        //     {
        //         expiresIn: '1d',
        //     },
        // );

const token = generateToken(user.id, user.role_id)

        res.json({
            user,
            token
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось авторизоваться" });

    }

}

const auth = async (req, res, next) => {
    try {
        console.log(req.user_id);
        const user = await User.findOne({ where: { id: req.user_id } });
        console.log(user);

        if (!user) {
            return res.status(500).json({
                message: "Ползователь не найден"
            });
        }

        res.json({
            user
        });


    } catch (error) {
        return res.status(500).json({
            message: "Нет доступа"
        });

    }

}

const getUsers = async (req, res, next) => {
    try {
        const users = await User.findAll()

        res.json(users)

    } catch (error) {
        return res.status(500).json({
            message: "Нет доступа"
        });

    }

}


module.exports = {
    register,
    login,
    auth,
    getUsers
}