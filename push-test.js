const webpush = require('web-push');

const vapid = {
    publicKey:"BMoSrKt5RZuJlmHXBsZRB7MVPZH1tU5S15Ps3nBobEhzkGdvh9NK4xP-befi118PtbRCjxaBwl8mDqx-C716jIE",
    privateKey:"GfNXIZlLeo3SwEoPGl7-c9z6Bioyr_bH2VWKatUW8vM"
};

webpush.setVapidDetails('mailto:phelipe.maia@first-utility.com', vapid.publicKey, vapid.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/eSqXsc_mD14:APA91bFe7ZfvRgN0hRSkNiDFtFyrNu5VzM43aos0W3VibwF91NXMU_Vcx1thhGRIxfrQbY032PA1rERApIGRB3Umz71zsAhF0_ROFP67OfpYyH2lX9Lka6Gei2j467CqfkJv7SmojwuT',
    keys: {
        auth: 'r-PedCiA2SbZ85DoKT7PNQ==',
        p256dh: 'BBwIAemhwsGaM7_CrNYVw1i2fWeKl0wped6xJOxrEp-ZT8NztPThjN_UTlaxWoGxvU_hZr8KfqqiIcv1tabpf2Q='
    }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
