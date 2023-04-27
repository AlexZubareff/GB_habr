
const { body } = require('express-validator');

const userValidators = {
    registerUserValidation: [
        body('email', 'Неверный формат почты').isEmail().normalizeEmail(),
        body('password', 'Пароль должен быть минимум 5 символов').not().isEmpty().trim().isLength({ min: 5 }).matches(/\d/).withMessage('должен содержать цифры'),
        body('name', 'Имя должно быть миниму 3 символа').isLength({ min: 3 }).withMessage('Должно быть минимум 3 символа')
    ],
    loginUserValidation: [
        body('email', 'Неверный формат почты').isEmail(),
        body('password', 'Пароль должен быть минимум 5 символов').isLength({ min: 5 })
    ]
 }



module.exports = userValidators;