const User = require('../models/user');

const axios = require('axios');
require('dotenv').config();


const url = 'https://fcm.googleapis.com/fcm/send';
const axiosHeaders = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.FCM_SERVER_KEY
    }
}

const sendNotification = async (req, res) =>{
    //TODO: Add middleware to verify these 2 values are coming from client
    const {to, title, body} = req.body;
    console.log(to);
    console.log(title);
    console.log(body);

    // Get the deviceToken corresponding to {to}
    const {deviceToken} = await User.findOne({_id: to});
    console.log('deviceToken:', deviceToken);

    const notification = {
        "notification": {
            "body": body,
            "title": title,
            "android_channel_id": "favors_channel"
        },
        "priority": "high",
        "data": {
            "id": "1",
            "status": "done"
        },
        "to": deviceToken,
    }

    axios.post(
        url,
        notification,
        axiosHeaders
    )
    .then(response => {
        console.log(response.data.explanation);
        res.status(200).json({ok: true});

        })
    .catch(error => {
        console.log(error);
        res.status(404).json({ok: false});
    });
    
}


module.exports = sendNotification;