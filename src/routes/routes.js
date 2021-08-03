const {Router} = require('express');
const router = Router();

router.post('/deviceToken', (req, res) => {
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
