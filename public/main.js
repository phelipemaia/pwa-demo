let swReg;

const serverUrl = 'http://localhost:3333';

//Service worker registration
navigator.serviceWorker.register('sw.js').then(registration => {
  swReg = registration;
  swReg.pushManager.getSubscription().then(setSubscribedStatus);
}).catch(console.error);

const setSubscribedStatus = (state) => {
  if (state) {
    document.getElementById('subscribe').className = 'hidden';
    document.getElementById('unsubscribe').className = '';
  } else {
    document.getElementById('subscribe').className = '';
    document.getElementById('unsubscribe').className = 'hidden';
  }
};

const getApplicationServerKey = () => {

  return fetch(`${serverUrl}/key`)
    .then(res => res.arrayBuffer())
    .then(key => new Uint8Array(key));
};

const unsubscribe = () => {
  swReg.pushManager.getSubscription().then(subscription => {
    subscription.unsubscribe().then(() => {
      setSubscribedStatus(false);
    })
  })
};

const subscribe = () => {
  if (!swReg) {
    return console.error('Service Worker Registration Not Found');
  }

  getApplicationServerKey().then(applicationServerKey => {
    swReg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey})
      .then(res => res.toJSON())
      .then(subscription => {
        fetch(`${serverUrl}/subscribe`, {method: 'POST', body: JSON.stringify(subscription)})
          .then(setSubscribedStatus)
          .catch(unsubscribe);
      }).catch(console.error);
  });
};