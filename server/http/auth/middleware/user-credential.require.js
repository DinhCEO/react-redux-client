const credentialRequire = function (req, res, next) {
    if(!req.body.email){
        return res.status(401).json({
            code    : 'AUTH_ERROR',
            message : 'email not valid'
        });
    }
    if(!req.body.password){
        return res.status(401).json({
            code    : 'AUTH_ERROR',
            message : 'password not valid'
        });
    }
    return next();
};

module.exports = credentialRequire;