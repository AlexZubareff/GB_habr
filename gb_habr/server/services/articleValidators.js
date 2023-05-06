
const { body } = require('express-validator');

const articleValidators = {
    articleCreateValidation: [
        body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
        body('text', 'Введите текст статьи').isLength({min: 10}).isString(),
        body('tags', 'Неверный формат тегов, укажите массив').optional().isString(),
        body('imageUrl', 'Неверная ссылка на изображение').optional().isString()
    ],
    articleUpdateValidation: [
        body('title', 'Введите заголовок статьи').isLength({min: 3}).isString(),
        body('text', 'Введите текст статьи').isLength({min: 10}).isString(),
        body('tags', 'Неверный формат тегов, укажите массив').optional().isString(),
        body('imageUrl', 'Неверная ссылка на изображение').optional().isString()
    ],

 }



module.exports = articleValidators;