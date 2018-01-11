# PWA-Demo

Demo to show features of PWA. There is also server calls to be able to dispatch push notifications to subscribers.

There are several events implemented on ServiceWorker. One to handle requests and provide the resource from cache.
Another one to add the static files to the cache during the installation of ServiceWorker. Finally,
one to receive the PushNotifications.
It's also possible to change the 'fetch' event to catch the request of base.css and provide baseSW.css instead.

## Installation

### Dependencies for server

```npm
npm install
```

* [Express](https://expressjs.com/)
* [node-storage](https://www.npmjs.com/package/node-storage)
* [Web-push](https://github.com/web-push-libs/web-push)

### Generate VAPID keys for PushNotification
 
```npm
npm vapid
```

### Add email to server/config.json
 
```json
{
  "pushServiceEmail": "your@email.com"
}
```

## Run
```npm
npm start
```

## Access

Access [http://localhost:3333](http://localhost:3333)

## PushNotification

On web page click on 'Subscribe' button. This button will make some requests to the server.
The first one will get the public key, to be able to subscribe the client to the PushService (FCM).
The second one will send the client details to be stored on the server and be used by server to broadcast
the PushNotification messages.

To prevent installation o DB, I'm using node-storage to create a file and use this file as DB, storing the subscribers.

Using CURL or Postman, make a POST call to: http://localhost:3333/push the content on body must be a string.

### License

[MIT licensed](./LICENSE).