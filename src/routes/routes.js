const {Router} = require('express');
const router = Router();

router.get('/getDeviceToken/:uid', (req, res) => {
    const uid = req.params.uid;
    // TODO: Search in DB token corresponding to this uid
    res.status(200).json({
        ok: true,
        message: uid
    });
});

router.post('/saveDeviceToken', (req, res) => {
    const {uid, deviceToken} = req.body
    console.log(uid);
    console.log(deviceToken);

    if(uid && deviceToken){
        // TODO: Save {uid} and {deviceToken} in DB
        res.status(200).json({ok: true});
    }else{
        res.status(400).json({ok: false});
    }
});


module.exports = router;
