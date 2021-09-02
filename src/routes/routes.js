const sendNotification = require('../utils/sendNotification');
const saveDeviceToken = require('../utils/saveDeviceToken');
const removeDeviceToken = require('../utils/removeDeviceToken');

const {Router} = require('express');
const router = Router();


router.post('/saveDeviceToken', saveDeviceToken);

router.post('/removeDeviceToken', removeDeviceToken);

router.post('/sendNotification', sendNotification);


module.exports = router;
