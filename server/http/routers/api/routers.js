const express = require('express');
const router = express.Router();
const JwtService = require('../../auth/jwt/JwtService');
const jwtService = new JwtService();
const userCredentialRequire = require('../../auth/middleware/user-credential.require');
const LoginRequire = require('./../../auth/middleware/token.verify');

router.get('/test', function (req, res) {
    setTimeout(function () {
        res.status(200).json({name: 'server response :D'});
    }, 5000);
});

router.post('/login', userCredentialRequire, function (req, res) {
    try {
        const token = jwtService.encode(req.body);
        const data = {
            token: token,
            profile: {
                email: req.body.email,
                role: 'customer'
            }
        };
        res.status(200).json(data);
    } catch (ex) {
        res.status(401).json({
            code: 'AUTH_ERROR',
            message: 'token encode found!'
        });
    }
});
router.get('/profile', LoginRequire, function (req, res) {
    let token = (req.query.token || req.body.token || req.get('Authorization') || '').replace("Bearer ", "");
    try {
        let payload = jwtService.decode(token);
        res.status(200).json({
            profile: {
                email: payload['email'],
                role: 'customer',
                time: payload['timestamp']
            }
        });
    } catch (err) {
        res.status(401).json({
            code: 'AUTH_ERROR',
            message: 'Authorization not found!'
        });
    }
});

module.exports = router;