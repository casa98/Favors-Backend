const {Schema, model} = require('mongoose');

const UserSchema = Schema({
    uid: {
        type: String,
        required: true
    },
    deviceToken: {
        type: String,
        required: true
    },
});

module.exports = model('User', UserSchema);