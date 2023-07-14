
const { Profile } = require('../models');

// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
// const {secret} = require('../config/config')

// const generateToken = (id, role) => {

//     const payload = 
//         {
//             id,
//             role
//         }
     
//     return jwt.sign(payload, secret, {expiresIn: '24h'})
// }



// const register = async (req, res, next) => {

//     try {

//         const pass = req.body.password;
//         console.log(pass);

//         const saltRounds = 10;
//         const passwordHash = await bcrypt.hash(pass, saltRounds);

//         const userRole = await Role.findOne({where: {name: "User"}})
//         console.log(userRole);



//         const newUser = User.build({
//             name: req.body.name,
//             email: req.body.email,
//             password: passwordHash,
//             role_id: userRole.id
//         })

//         const user = await newUser.save();

//         // const token = jwt.sign(
//         //     {
//         //         id: user.id,
//         //     },
//         //     config.secret,
//         //     {
//         //         expiresIn: '30d',
//         //     },
//         // );
//         const token = generateToken(user.id, user.role_id)

//         res.json({
//             user,
//             token
//         });

//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Такой пользователь уже существует" });

//     }
// }

// const login = async (req, res, next) => {
//     try {
//         const user = await User.findOne({ where: { email: req.body.email } });
//         console.log(user);
//         if (!user) {
//             return res.status(403).json({
//                 // message: 'Неверный логин или паароль',
//                 message: 'Пользователь не найден',

//             });
//         }

//         const isValidPass = await bcrypt.compare(req.body.password, user.password);

//         if (!isValidPass) {
//             return res.status(404).json({
//                 message: 'Неверный логин или паароль',

//             });
//         }

//         // const token = jwt.sign(
//         //     {
//         //         id: user.id,
//         //     },
//         //     config.secret,
//         //     {
//         //         expiresIn: '1d',
//         //     },
//         // );

// const token = generateToken(user.id, user.role_id)

//         res.json({
//             user,
//             token
//         });


//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Не удалось авторизоваться" });

//     }

// }

const getProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const profile = await Profile.findOne({ where: { user_id: userId } });
        console.log(profile);

        if (!profile) {
            return res.status(500).json({
                message: "Профиль не найден"
            });
        }

        res.json(profile);


    } catch (error) {
        return res.status(500).json({
            message: error.message
        });

    }

}
// const createProfile = async (req, res, next) => {
//     try {

//         const newArticle = Article.build({
//             title: req.body.title,
//             text: req.body.text,
//             imageUrl: req.body.imageUrl,
//             tags: req.body.tags,
//             category_id: req.body.category_id,
//             user_id: req.user_id,
//             status: req.body.status
//         });
//         console.log(newArticle);
//         const article = await newArticle.save();
//         console.log(article);

//         res.json(article);

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Не удалось создать статью" });
//     }
// }


const updateProfile = async (req, res, next) => {
    try {
        const userId = req.params.id;
        await Profile.update({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            country: req.body.country,
            city: req.body.city,
            // birthday: req.body.birthday,
            // about_me: req.body.about_me
        },
            {
                where: {
                    user_id: userId,
                }
            });

        res.json({
            success: true,
        });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Не удалось обновить профиль" });

    }
}







module.exports = {
    getProfile,
    updateProfile
    
}