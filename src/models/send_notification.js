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
    
    const notification = {
        "notification": {
            "body": "Notification from my server hehe",
            "title": "Hello!",
            "android_channel_id": "favors_channel"
        },
        "priority": "high",
        "data": {
            "id": "1",
            "status": "done"
        },
        "channesl": "favors_channel",
        "to": "cLxBlUDDSaOgepNAENsGlP:APA91bFIJfYTv1unxa_VIIALzt3JlnB-1afs5xt5u9KmffmKcO5iXHkPXSXH_IoJvWYLiy7atW3Fxsmob_r7V6-c55lL5sNclbHtOAFW-X_6VJzhVgPqaFsP1-YdhdWgVcD0iV_Ov7m0"
    }

    axios.post(
        url,
        notification,
        axiosHeaders
    )
    .then(response => {
        console.log(response.data.url);
        console.log(response.data.explanation);
        res.status(200).json({ok: true});

        })
    .catch(error => {
        console.log(error);
        res.status(404).json({ok: false});
    });
    
}


module.exports = sendNotification;