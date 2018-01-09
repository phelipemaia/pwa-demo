const webpush = require('web-push');

const vapid = {
    publicKey:"BMoSrKt5RZuJlmHXBsZRB7MVPZH1tU5S15Ps3nBobEhzkGdvh9NK4xP-befi118PtbRCjxaBwl8mDqx-C716jIE",
    privateKey:"GfNXIZlLeo3SwEoPGl7-c9z6Bioyr_bH2VWKatUW8vM"
};

webpush.setVapidDetails('mailto:phelipe.maia@first-utility.com', vapid.publicKey, vapid.privateKey);

const pushSubscription = {
    endpoint: 'https://fcm.googleapis.com/fcm/send/cg0B-A5uXKc:APA91bHfgiEaraLyMI3irjMnmXkostkp1raRozUWkZ5lOMIIw6rZFckLl0MXjIl_ram3tWVqntRQKxv7iGy8ugTvSdbei1PSkeWxp_cnOdv9O_7Q2tc8CV38EtD3tVyv-_Rir3YL15_4',
    keys: {
        auth: 'pUhK__bBxcRR8OkTaZjGIA==',
        p256dh: 'BIMuD5LBgJiMTabrrESpN--pz2QirxOPx80ruvs6ILsUsrPl_otl95RNA4nJg905UTvZcfc9cWJSk3ip9DLNS88='
    }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server');
console.log('Push sent to client');
