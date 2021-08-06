const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    _id: {
        type: String,
        required: true
    },
    deviceToken: {
        type: String,
        required: true
    },
});

module.exports = model('User', UserSchema);