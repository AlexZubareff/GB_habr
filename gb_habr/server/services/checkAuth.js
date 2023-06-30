const jwt = require('jsonwebtoken');
// const config = require('../config/config')
const {secret} = require('../config/config')


const checkAuth = (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log(token);

    if (token) {
        try {
            const decoded = jwt.verify(token, secret);
            // console.log(decoded.id);
            // console.log(decoded.role);
            req.user_id = decoded.id;
            req.role_id = decoded.role
        } catch (error) {
            return res.status(403).json({
                message: 'Нет доступа',
            })
        }
    }else{
       return res.status(403).json({
            message: 'Нет доступа',
        })
    }



next();


}


module.exports = { checkAuth };