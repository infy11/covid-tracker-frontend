const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {


    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      console.log('registering service worker');
      navigator.serviceWorker.register('service-worker.js');


    });
  }
};
export default registerServiceWorker;
