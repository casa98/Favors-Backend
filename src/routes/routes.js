const User = require('../models/user');
const sendNotification = require('../models/send_notification');

const {Router} = require('express');
const router = Router();


router.post('/saveDeviceToken', async (req, res) => {
    //TODO: Add middle to verify these 2 values are coming from client
    const {uid, deviceToken} = req.body
    console.log('uid:', uid);
    console.log('deviceToken:', deviceToken);

    if(uid && deviceToken){
        //TODO: For each uid, set a list and add deviceTokens to it (eah user could log in from more than one device)
        const exists = await User.findOne({_id: uid});
        console.log(exists);
        if(exists){
            console.log("token already registered for given uid");

            // Remove existing token, then add new one
            await User.deleteOne({_id: uid});

            // Save data
            const user = User({
                _id: uid,
                deviceToken: deviceToken
            });
            await user.save();
        }else{
            console.log("registering token for given uid");

            // Save data
            const user = User({
                _id: uid,
                deviceToken: deviceToken
            });
            await user.save();
        }
        
        res.status(200).json({ok: true});
    }else{
        res.status(400).json({ok: false});
    }
});

router.get('/sendNotification', sendNotification);


module.exports = router;
