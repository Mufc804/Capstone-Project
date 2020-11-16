var UserModel = require("../models/user.model");
var env = require("../DB");
var jwt = require('jsonwebtoken');

exports.GetUserFromDB = (req, res) => {
    UserModel.find({}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
}

exports.GetUserById = (req, res) => {
    UserModel.findById(req.params.id, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "User found successfully" });
    })
}

exports.StoreUserInfo = (req, res) => {
    let user = new UserModel({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })

    user.save((err, result) => {
        if (err) throw err;
        res.json({ "msg": "User stored successfully" });
    })
}

exports.UpdateUserInfo = (req, res) => {
    UserModel.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
        if (err) throw err;
        res.json({ "msg": "User updated successfully" });
    })
}

exports.DeleteUserInfo = (req, res) => {
    var deleteId = req.params.id;
    UserModel.deleteOne({ _id: deleteId }, (err, result) => {
        if (err) throw err;
        if (result.deletedCount > 0) {
            res.json({ "msg": "User deleted successfully" });
        } else {
            res.json({ "msg": "User not present" });
        }
    })
}

exports.register = function (req, res) {
    const { username, email, password, passwordConfirmation } = req.body;

    if (!email || !password) {
        return res.status(422).json({
            'error': 'Please provide your email or password'
        })
    }

    if (password != passwordConfirmation) {
        return res.status(422).json({
            'error': 'Passwords do not match'
        })
    }

    UserModel.findOne({ email }, function (err, existingUser) {
        if (err) {
            return res.status(422).json({
                'error': 'User could not be found'
            })
        }
        if (existingUser) {
            return res.status(422).json({
                'error': 'User already exists'
            })
        } else {
            var user = new UserModel({
                username, email, password
            })

            user.save(function (err) {
                if (err) {
                    return res.status(422).json({
                        'error': 'User could not be registered'
                    })
                }
                return res.status(200).json({
                    'registered': true
                })
            })
        }
    })
}

exports.login = function (req, res) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({
            'error': 'Please provide your email or password'
        })
    }
    UserModel.findOne({ email }, function (err, user) {
        if (err) {
            return res.status(422).json({
                'error': 'Login failed'
            })
        }
        if (!user) {
            return res.status(422).json({
                'error': 'Invalid user'
            })
        }
        if (user.hasSamePassword(password)) {
            json_token = jwt.sign({
                userId: user.id,
                username: user.username
            },
                env.secret,
                { expiresIn: '1h' })
            return res.json(json_token);
        } else {
            return res.status(422).json({
                'error': 'Wrong email or password'
            })
        }
    })
}

exports.authMiddleware = function (req, res, next) {
    const json_token = req.headers.authorization
    try {
        if (json_token) {
            var user = parseToken(json_token);
            UserModel.findById(user.userId, function (err, user) {
                if (err) {
                    return res.status(422).json({
                        'error': 'User could not be found'
                    })
                }
                if (user) {
                    res.locals.user = user;
                    next();
                } else {
                    return res.status(422).json({
                        'error': 'Not an authorized user'
                    })
                }
            })
        } else {
            return res.status(422).json({
                'error': 'Not an authorized user'
            })
        }
    } catch (err) {
        res.status(403).json({
            success: false,
            message: err
        })
    }
}

function parseToken(token) {
    return jwt.verify(token.split(' ')[1], env.secret);
}