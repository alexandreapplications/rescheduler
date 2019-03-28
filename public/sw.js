importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/01a972c7cbc2fbcd36f2.js",
    "revision": "c946a9c7d13bbe3c304dba510a9bb7e8"
  },
  {
    "url": "/_nuxt/3b8141f8115bdec7ff8a.js",
    "revision": "57cbd70dbe40d217eccf2bf67a9c4656"
  },
  {
    "url": "/_nuxt/3ea1c8266d85031f1f45.js",
    "revision": "04cd664dda77d670c46097e8d7ac7b20"
  },
  {
    "url": "/_nuxt/58b2c8f5bd9f7bc38f0d.js",
    "revision": "592723447e7068c705f8b516473b2842"
  },
  {
    "url": "/_nuxt/7ac33dae5846d4ecb152.js",
    "revision": "3662df1abb25f16536f39b9aa5113b17"
  },
  {
    "url": "/_nuxt/ab05345bed6e0ed21e13.js",
    "revision": "b2f4ba4e8d921053d2482c06fbac1e6d"
  }
], {
  "cacheId": "frontend-website",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
