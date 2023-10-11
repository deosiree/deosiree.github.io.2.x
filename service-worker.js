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
    "revision": "53059445d45733dcb9cabaae390d5ef4"
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
    "url": "assets/js/12.67aeae84.js",
    "revision": "b932f7a73f072e38b5f8b9c8292f44df"
  },
  {
    "url": "assets/js/13.ea19b661.js",
    "revision": "d3b11d899f40c1cc80f10e71503f9f5b"
  },
  {
    "url": "assets/js/14.deee688e.js",
    "revision": "3bdcf658a53811918d8d4644537e6e74"
  },
  {
    "url": "assets/js/15.61ba4b62.js",
    "revision": "e681d3b44f3d06e323853e6c0593bafa"
  },
  {
    "url": "assets/js/16.464835a9.js",
    "revision": "4115e7941a7eb73310faf5537a2a7d5a"
  },
  {
    "url": "assets/js/17.b041816e.js",
    "revision": "352696c6e7d6996e1d191926e08a3ccb"
  },
  {
    "url": "assets/js/18.f448bc21.js",
    "revision": "b41c62bcf4e0c08a59bb760b2d0cb560"
  },
  {
    "url": "assets/js/19.371cdb6e.js",
    "revision": "7e0b1f9769d397d89dba85cdacaa140c"
  },
  {
    "url": "assets/js/20.3f19ffe0.js",
    "revision": "456532b3d0a9a6b8b195518906c832cd"
  },
  {
    "url": "assets/js/21.b0502ba0.js",
    "revision": "cea7c6e36c20c1f6ec6cfa08951a4ffe"
  },
  {
    "url": "assets/js/22.7f56eda9.js",
    "revision": "22031fb09a83e679edf72189c4e92320"
  },
  {
    "url": "assets/js/23.2cbbcecf.js",
    "revision": "208524489402afdf9583349bc7fb1019"
  },
  {
    "url": "assets/js/24.7d535cc9.js",
    "revision": "f2e47934c6c0aeeecf42f2e1ed75ccf7"
  },
  {
    "url": "assets/js/25.54d48828.js",
    "revision": "8bfd858534e6bdeeb13d64d1058ab317"
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
    "url": "assets/js/app.37ed7473.js",
    "revision": "6492f818e3999c1212bfca5129c77651"
  },
  {
    "url": "avator.jpg",
    "revision": "1063672e6763c4e9d4b73c2f37f2cfaf"
  },
  {
    "url": "backend/docker/Elasticsearch.html",
    "revision": "37655e2d6ec60ea7b32ff7e447c2e704"
  },
  {
    "url": "backend/docker/preface.html",
    "revision": "67b2eadc106b8ab76519b295d87b1b33"
  },
  {
    "url": "backend/docker/Web.html",
    "revision": "c9ee633d30485d9d181df97a0a73d18a"
  },
  {
    "url": "backend/microservice/twelve-factor.html",
    "revision": "fa43d884725a8cd61ee8929446c92199"
  },
  {
    "url": "backend/mysql/explain.html",
    "revision": "4fde712bea944e904334e8c5c509a15c"
  },
  {
    "url": "backend/mysql/preface.html",
    "revision": "8ac7d915cfe0fc7a2744e276cd4e2128"
  },
  {
    "url": "backend/work/poi.html",
    "revision": "b213c795440cb9c30edc1a4b6fc72e79"
  },
  {
    "url": "backend/work/practice.html",
    "revision": "f8705fc904bda99c6c7f4eed580d413c"
  },
  {
    "url": "categories/index.html",
    "revision": "c51ec029c3aa7090e0dea8da10901cb1"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6290c21f803a21206a59061b97d8ee31"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "819eb0c41f0cf19879ff2a47a36763a9"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "f9aa532a8e5cda7baf8b021aa97edcdc"
  },
  {
    "url": "frontend/vuepress/2023-10-10-搭建个人博客.html",
    "revision": "a66410112d91f2266dbc1d1eab565500"
  },
  {
    "url": "frontend/vuepress/VuePressOne.html",
    "revision": "7cff7d376d99e5bd6f7592eac143dd01"
  },
  {
    "url": "frontend/vuepress/VuePressThree.html",
    "revision": "fabb2d3c52746fcc3d70ba67ef0efde2"
  },
  {
    "url": "frontend/vuepress/VuePressTwo.html",
    "revision": "ecfb84041300219ccafb5e11dff60ae5"
  },
  {
    "url": "index.html",
    "revision": "24844eaaa24d76aa8a17952bb064700d"
  },
  {
    "url": "logo.jpg",
    "revision": "5e96647a4edcdb5cca7a75b54800a1f2"
  },
  {
    "url": "message-board.html",
    "revision": "d75e164ea7a5e5fc00967e7a0f76bd61"
  },
  {
    "url": "tag/Docker/index.html",
    "revision": "8f45f6e7ce00a9a1758e939f2111d7ca"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "3f2aa5ff808395cfbf1f32f03ead16e6"
  },
  {
    "url": "tag/index.html",
    "revision": "36651339bfdfbf0b389eaaad116d1542"
  },
  {
    "url": "tag/MySQL/index.html",
    "revision": "c41a0777e53eaf6a4bc2ccad68a6f06c"
  },
  {
    "url": "tag/VuePress/index.html",
    "revision": "abea21919080ba80f102d3952ded619a"
  },
  {
    "url": "tag/工作/index.html",
    "revision": "5b55b17a9af49a2e0379101da07fb034"
  },
  {
    "url": "tag/微服务/index.html",
    "revision": "c001d7b699fb15c616ab24efdf679c85"
  },
  {
    "url": "timeline/index.html",
    "revision": "c6504c52ea90baf60114dd2cc2d36782"
  },
  {
    "url": "tool/git.html",
    "revision": "be0227efa5bc5216237081e4f2a2289b"
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
