const User = require('../models/user');

const removeDeviceToken = async (req, res) => {
    const {uid} = req.body;
    console.log('uid:', uid);

    if(uid){
        const result = await User.deleteOne({_id: uid});
        console.log(result);
        return res.status(200).json({ok: true});
    }
    res.status(400).json({ok: false});
}


module.exports = removeDeviceToken;