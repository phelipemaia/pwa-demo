const webpush = require('web-push');

const vapid = {
    publicKey:"BLuIkVVhpn2OKv7biV3K2kr0GHNlImpJ-7ZleUes1DSjRcwAObqqlbCMcHsMUxgBc0afofRVAkmGwG9UVwKTQj0",
    privateKey:"qpn2CJ_KSE-6cGQRgHuE37mRxRTwzePYw0RiJmusIcY"
};

webpush.setVapidDetails('mailto:phelipe.maia@first-utility.com', vapid.publicKey, vapid.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cYZurwvKZXY:APA91bEKfI60F21q_aX-a0dBjfyD77XoqXNFCNzo7X0sxC6SaUz8vZhf5PGua4jITnR-Wx20KYkXAz0KovxNOcN_HjIlwrjRU4aehipnFnaIfXn3hI-QfET7776B3p_BsTLl3ZKMi0B1',
    keys: {
        auth: 'FgBQ4QeV-Z7CWC7iCUBtKw==',
        p256dh: 'BDYSPN9HHHf2jY7p-BsrfBwrAXNNa5ZgyjVQPONRmaDg_q00ls6QzUMLg1hYfkYeVXnYgT9i4URQSTeoS87HLIs='
    }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
