if (navigator.serviceWorker) {
    var urlBase64ToUint8Array = function urlBase64ToUint8Array(base64String) {
        var padding = '='.repeat((4 - base64String.length % 4) % 4);
        var base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');

        var rawData = window.atob(base64);
        var outputArray = new Uint8Array(rawData.length);

        for (var i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };

    navigator.serviceWorker.register('/sw.js').then(function (registration) {
        console.log('Service Worker registered');
        var pubKey = 'BMoSrKt5RZuJlmHXBsZRB7MVPZH1tU5S15Ps3nBobEhzkGdvh9NK4xP-befi118PtbRCjxaBwl8mDqx-C716jIE';

        registration.pushManager.getSubscription().then(function (sub) {
            if (sub) return sub;

            var applicationServerKey = urlBase64ToUint8Array(pubKey);

            return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: applicationServerKey});
        }).then(function (sub) {
            return sub.toJSON();
        }).then(console.log).catch(console.log);
    }).catch(function (error) {
        console.log(error);
    });
} else {
    console.log('no service');
}
