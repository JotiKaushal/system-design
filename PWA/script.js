//check if service worker is supported by browser
if (navigator.serviceWorker) {
  //Register the service worker
  navigator.serviceWorker
    .register("./sw.js")
    .then((res) => {
      console.log("service worker is registered successfully");
    })
    .catch((err) => {
      console.log("error while registering service worker");
    });
}


