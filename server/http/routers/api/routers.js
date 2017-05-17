const express = require('express');
const router = express.Router();
const JwtService = require('../../auth/jwt/JwtService');
const jwtService = new JwtService();
const loginCredential = require('../../auth/middleware/user-credential.require');
const LoginRequire = require('./../../auth/middleware/token.verify');
const rand = require('random-key');

const dataFake = [
    {
        id: 'asaHAGTlW3o3pWTy',
        completed: false,
        text: "Learn about actions 1"
    },
    {
        id: 'asaHAGTlW3o3pWTM',
        completed: false,
        text: "Learn about actions 2"
    },
    {
        id: 'asaHAGTlW3o3pWTt',
        completed: false,
        text: "Learn about actions 3"
    }
];

router.get('/get-data', LoginRequire, function (req, res) {
    res.status(200).json(dataFake);
});
router.put('/:text', LoginRequire, function (req, res) {
    let text = req.params.text;
    let newTodo = {
        id: rand.generate(),
        completed: false,
        text: text
    };
    dataFake.push(newTodo);
    res.json(newTodo);
});
router.post('/login', loginCredential, function (req, res) {
    try {
        const token = jwtService.encode(req.body);
        const data = {
            token: token,
            profile: {
                username: req.body.email,
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
            profile: payload
        });
    } catch (err) {
        res.status(401).json({
            code: 'AUTH_ERROR',
            message: 'Authorization not found!'
        });
    }
});

module.exports = router;