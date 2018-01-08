const webpush = require('web-push');

const vapid = {
    publicKey:"BLuIkVVhpn2OKv7biV3K2kr0GHNlImpJ-7ZleUes1DSjRcwAObqqlbCMcHsMUxgBc0afofRVAkmGwG9UVwKTQj0",
    privateKey:"qpn2CJ_KSE-6cGQRgHuE37mRxRTwzePYw0RiJmusIcY"
};

webpush.setVapidDetails('mailto:phelipe.maia@first-utility.com', vapid.publicKey, vapid.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/dzbss0CrG2g:APA91bEeMk4ySAfDY69JGsLsWxqLXNHTHUK7NRS_4k5-iWLeGpdK4Cqiwvoa3r8UAQfcuwIBeR-H65DCh0sCmzRfrY4g8V8OKu0rM6N-z2WMI-Q-cbBbOHsNqzNCU_KpZTnHV8AYHj5U',
    keys: {
        auth: 'NlRej9y9zggTo5Cpf1iSDw==',
        p256dh: 'BDigrokWYCj2Uzu77yd0gIBST4AGg2dTayL-Yp3RMxusXHVrgCR9B17nR2lR9j5WpjEHw4M8iX52a068J_UJRfk='
    }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
