/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "95ccf9a4cda94f96e7e994c3fdf36940"
  },
  {
    "url": "assets/css/0.styles.e211a165.css",
    "revision": "7211ce6021712cc1c5a857ac5a787ef2"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.d4cddd66.js",
    "revision": "3b435e1fb5a07b9212cc0acd20112f6a"
  },
  {
    "url": "assets/js/10.90017dd4.js",
    "revision": "540d011d908691b129594953763d1eee"
  },
  {
    "url": "assets/js/11.04de4d92.js",
    "revision": "87aad6929c85f7008f79a43b2b8868cf"
  },
  {
    "url": "assets/js/12.33b4be96.js",
    "revision": "05c27c09d71e15de2992bb5c622491c5"
  },
  {
    "url": "assets/js/13.4dddf8d1.js",
    "revision": "78bf06c3788ccfe27ec08c6805781e9e"
  },
  {
    "url": "assets/js/14.4e6ddc04.js",
    "revision": "9bab6d77fedbfb9d074bf7565742e91c"
  },
  {
    "url": "assets/js/15.b6cb5808.js",
    "revision": "df2733c552bbe9183e2a378660ef96f8"
  },
  {
    "url": "assets/js/16.01fc4339.js",
    "revision": "ef9ade9b378a2968439c4ffbdc49d21d"
  },
  {
    "url": "assets/js/17.92fbe796.js",
    "revision": "6015521a2956d56c11e35e73d84675ca"
  },
  {
    "url": "assets/js/18.3c1e7b51.js",
    "revision": "702fdabdf6b047ac1f5876ee9c9ec174"
  },
  {
    "url": "assets/js/19.968d3f94.js",
    "revision": "91b9c20c3e845760d66d1ff8abfb9d1a"
  },
  {
    "url": "assets/js/20.5102af47.js",
    "revision": "d1d772ce4b85bb118eb6ac8e54600bf9"
  },
  {
    "url": "assets/js/21.b0502ba0.js",
    "revision": "cea7c6e36c20c1f6ec6cfa08951a4ffe"
  },
  {
    "url": "assets/js/22.6e790c99.js",
    "revision": "90cd4090b7ffd00d8596460f3c78d3db"
  },
  {
    "url": "assets/js/23.a9ed392f.js",
    "revision": "39fe3d3216b156e69fb7b5b8c77a541d"
  },
  {
    "url": "assets/js/24.084f82df.js",
    "revision": "f90daef37c9141e0133408fea98b155c"
  },
  {
    "url": "assets/js/25.4ab35f3e.js",
    "revision": "9b3dcfda4b37e0f34406df304d673b92"
  },
  {
    "url": "assets/js/26.cc03bca4.js",
    "revision": "27bc885cb876241d81460974f85061a8"
  },
  {
    "url": "assets/js/27.796ae207.js",
    "revision": "1b0624c752d732951a1dac79528f1c8a"
  },
  {
    "url": "assets/js/3.a7eca6c4.js",
    "revision": "23092dec0bb692cc609814e40a3cb540"
  },
  {
    "url": "assets/js/4.fdc063eb.js",
    "revision": "31e8fd2d28b55aca75aa362d1c8e061d"
  },
  {
    "url": "assets/js/5.a8a921ca.js",
    "revision": "c101dd4957f13adf1a1b57d7eb35ddc8"
  },
  {
    "url": "assets/js/6.c39d28a5.js",
    "revision": "9a318bbc02c70cfecc5e64c68a4aca80"
  },
  {
    "url": "assets/js/7.a335f74e.js",
    "revision": "195f9d6e5749e8bb4f3927612db2865b"
  },
  {
    "url": "assets/js/8.cf3ea344.js",
    "revision": "b5dde0396d35632e0b785a9469ad75e7"
  },
  {
    "url": "assets/js/9.f64f05af.js",
    "revision": "cf3d07ae6bda36c7a9c65648dc9fb486"
  },
  {
    "url": "assets/js/app.af02b587.js",
    "revision": "4030edee5b9287c9ea32545bf300fec5"
  },
  {
    "url": "avator.jpg",
    "revision": "1063672e6763c4e9d4b73c2f37f2cfaf"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "3801ab3e1384379d6c36876d23fcfc23"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "da4f86d0baba5e15dc48e8339494fd30"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "0d4dbc79f5c78582ef7f015f33689f93"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "abe03ca6ca80f106c029a4cc2001b93f"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "3de5263f42ecf4a505a7f88e80c0fffd"
  },
  {
    "url": "backend/mysql/preface.html",
    "revision": "5fe7b5080688c7b7696a78c46bdbb7ba"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "a6e2159fe8718716719107ebd7ccf23d"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "654cff2ee36e360065ef22d109e28324"
  },
  {
    "url": "categories/index.html",
    "revision": "fe36fc35877002d627d8d6919d2b06b2"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "65c324ae54942451139c9386d0adbd53"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "b5853d6afd29749d3274ea5e82ccf7d0"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "79f861e3509c1d4f7db501588dc91a2a"
  },
  {
    "url": "frontend/vuepress/2023-10-10-搭建个人博客.html",
    "revision": "bab8842418ee24aad72a53a510a5a5e8"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "35a1d4dd4bf5b67a57be16ef4710eac1"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "6addea8290e91bb693624df70bb32392"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "1eaaf9149a9e02868c38103fd5209ef2"
  },
  {
    "url": "index.html",
    "revision": "da9b2aa97c33cab331531e2ec4cb2042"
  },
  {
    "url": "logo.jpg",
    "revision": "5e96647a4edcdb5cca7a75b54800a1f2"
  },
  {
    "url": "message-board.html",
    "revision": "8990e1050ee0fa1650664c7b5e6ed85f"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "70a72bbd6934cdf8d2cb6f1211f9f312"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "68b23d6811a2004b701c40d5ebf0e5e1"
  },
  {
    "url": "tag/index.html",
    "revision": "a22d2128b57f1be583b6ad4a0660ad82"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "744ddb7410168517a11b3e87378acd85"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "064d5944a36376da543300b0c04b4344"
  },
  {
    "url": "tag/工作/index.html",
    "revision": "806e666a9102de9c419789fd122ffa85"
  },
  {
    "url": "tag/微服务/index.html",
    "revision": "b3f13afc60c6d11c31c1fb1092b7692a"
  },
  {
    "url": "timeline/index.html",
    "revision": "5b6cf8ef72720569bf45b99fac9546ec"
  },
  {
    "url": "tool/git.html",
    "revision": "1290e1eeaa5a9eddc83dd0fa02cb1f53"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
