const jwt = require('jsonwebtoken');
const config = require('../config/config')


const checkAuth = (req, res, next) => {

    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log(token);

    if (token) {
        try {
            const decoded = jwt.verify(token, config.secret);
            console.log(decoded.id);
            req.user_id = decoded.id;
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