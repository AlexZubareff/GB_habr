const jwt = require('jsonwebtoken');
// const config = require('../config/config')
const {secret} = require('../config/config')


const checkRole = (role) => {

    return function(req, res, next){

        const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
        console.log(token);

        if (token) {
            try {

                const decoded = jwt.verify(token, secret);
                // console.log(decoded.id);
                // console.log(decoded.role);
                // req.user_id = decoded.id;
                userRole = decoded.role

                let hasRole = false;
                role.forEach(role => {
                    if (role == userRole){
                        hasRole = true
                    }
                });
                

                if (!hasRole) {
                    return res.status(403).json({message: "У вас нет доступа!"})
                }

            } catch (error) {
                return res.status(403).json({
                    message: 'Нет доступа',
                })
            }
        }else{
           return res.status(403).json({
                message: 'Пользователь не авторизован!',
            })
        }
    
    
    
    next();
    
    }

    

};


module.exports = { checkRole };