var mongoose = require("mongoose");
var bcrypt = require('bcryptjs');
mongoose.pluralize(null);
var UserSchema = mongoose.Schema;

var UserSchemaRef = new UserSchema({
    username: {
        type: String,
        min: [4, 'Username is too short. Min 4 characters are required'],
        max: [32, 'Username is too long. Max 16 characters are required']
    },
    email: {
        type: String,
        min: [4, 'Email is too short. Min 4 characters are required'],
        max: [32, 'Email is too long. Max 16 characters are required'],
        lowercase: true,
        unique: true,
        required: 'Email is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [4, 'Password is too short. Min 4 characters are required'],
        max: [32, 'Password is too long. Max 16 characters are required'],
        required: 'Password is required'
    },
    passwordConfirmation: {
        type: String,
        min: [4, 'Password is too short. Min 4 characters are required'],
        max: [32, 'Password is too long. Max 16 characters are required']
    }
});

UserSchemaRef.pre('save', function (next) {
    const user = this;
    bcrypt.genSalt(10, function (err, salt) {
        if (err) {
            return res.status(422).json({
                'error': 'Error during gensalt hash'
            })
        }
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) {
                return res.status(422).json({
                    'error': 'Error during password hash'
                })
            }
            user.password = hash;
            next();
        })
    })
})

UserSchemaRef.methods.hasSamePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

var UserModel = mongoose.model("User", UserSchemaRef);
module.exports = UserModel;