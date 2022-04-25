import { registerRoute, Route } from 'workbox-routing';
import {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
} from 'workbox-strategies';
import { precacheAndRoute } from 'workbox-precaching';
import { setCacheNameDetails, skipWaiting, clientsClaim } from 'workbox-core';
import {ExpirationPlugin} from 'workbox-expiration';
import {BASE_HOSTNAME} from "./constants";

// precacheAndRoute(self.__WB_MANIFEST  || [], {
//     directoryIndex: null,
//     cleanUrls: false,
// });

setCacheNameDetails({
    prefix: 'covid-tracker-cache',
});


const apiRoute = new Route(({ url, request }) => {
    return url.hostname === BASE_HOSTNAME;
}, new CacheFirst({
    cacheName: 'api',
    plugins: [
        new ExpirationPlugin({
            maxAgeSeconds: 300,
        })
    ]
}));
//
 registerRoute(apiRoute)


//adding cache first strategy for all images type at runtime. no need to precache it.
registerRoute(
    /\.(?:png|gif|jpg|jpeg|webp|svg)$/,
    new CacheFirst({
        cacheName: 'razorpay-x-images',
        plugins: [
            new ExpirationPlugin({
                maxEntries: 100,
                maxAgeSeconds: 12 * 30 * 24 * 60 * 60, // 365 Days
            }),
        ],
    }),
);

// Cache the Google Fonts stylesheets with a stale-while-revalidate strategy.
registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
    }),
);


// Cache the underlying font files with a cache-first strategy for 1 year.
registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new ExpirationPlugin({
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
                maxEntries: 30,
            }),
        ],
    }),
);

