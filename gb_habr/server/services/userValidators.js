
const { body } = require('express-validator');

const userValidators = {
    registerUserValidation: [
        body('email', 'Неверный формат почты').isEmail().normalizeEmail(),
        body('password', 'Пароль должен быть минимум 5 символов').not().isEmpty().trim().isLength({ min: 5 }).matches(/\d/).withMessage('Пароль должен содержать цифры'),
        body('name', 'Имя должно быть миниму 3 символа').isLength({ min: 3 })
    ],
    loginUserValidation: [
        body('email', 'Неверный email или пароль').isEmail(),
        body('password', 'Неверный email или пароль').isLength({ min: 5 })
    ]
 }

module.exports = userValidators;