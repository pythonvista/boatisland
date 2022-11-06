import { precacheAndRoute } from 'workbox-precaching/precacheAndRoute';

precacheAndRoute(self.__WB_MANIFEST);

self.__precacheManifest = [].concat(self.__precacheManifest || []);

// workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
self.addEventListener('install', (evt)=>{
    console.log('installed')
    console.log(evt)
})