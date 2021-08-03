const User = require('../models/user');

const {Router} = require('express');
const router = Router();

router.get('/getDeviceToken/:uid', async (req, res) => {
    const uid = req.params.uid;
    // Search in DB, token corresponding to this uid
    const user = await User.findOne({uid});
    if(user){
        res.status(200).json(user);
    }else{
        res.status(400).json({
            ok: false,
            message: 'uid not found'
        });
    }
    
});

router.post('/saveDeviceToken', async (req, res) => {
    const {uid, deviceToken} = req.body
    console.log(uid);
    console.log(deviceToken);

    if(uid && deviceToken){
        // Save {uid} and {deviceToken} in DB
        const user = User(req.body);
        await user.save();
        res.status(200).json({ok: true});
    }else{
        res.status(400).json({ok: false});
    }
});


module.exports = router;
