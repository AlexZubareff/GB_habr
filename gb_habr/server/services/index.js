
const userValidators = require('./userValidators');
const articleValidators = require('./articleValidators');

const {checkAuth} = require('./checkAuth');
const { checkValidation } = require('./checkValidation');
const {checkRole} = require('./checkRole');


module.exports = {
    userValidators,
    articleValidators,
    checkAuth,
    checkRole,
    checkValidation
}