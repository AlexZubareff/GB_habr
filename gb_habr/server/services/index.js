
const userValidators = require('./userValidators');
const articleValidators = require('./articleValidators');

const {checkAuth} = require('./checkAuth');
const { checkValidation } = require('./checkValidation');

module.exports = {
    userValidators,
    articleValidators,
    checkAuth,
    checkValidation
}