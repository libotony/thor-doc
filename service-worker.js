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
    "revision": "365fd3fd4f0abedb4b429bafaba5a756"
  },
  {
    "url": "assets/css/0.styles.43f99155.css",
    "revision": "56b26ca04d75164a547939e3a8e38a53"
  },
  {
    "url": "assets/img/activities.36116c16.png",
    "revision": "36116c16687c3473ca786d4c7d62e016"
  },
  {
    "url": "assets/img/add_circle_outline.c5b0d45d.svg",
    "revision": "c5b0d45d9ff3b78a9ac4ac72a70ea50c"
  },
  {
    "url": "assets/img/add.0e3e08bc.svg",
    "revision": "0e3e08bcb441c2cb39bdfff7f56f06a2"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/address.8c163b8f.png",
    "revision": "8c163b8f3c49e340a7c9546af4ed690e"
  },
  {
    "url": "assets/img/content_copy.72dd793a.svg",
    "revision": "72dd793a97203adfad3c50ebad310ee4"
  },
  {
    "url": "assets/img/control_point_duplicate.0028d2cc.svg",
    "revision": "0028d2cca15e5c298bc49d9f8058a0d3"
  },
  {
    "url": "assets/img/delete_forever.01754524.svg",
    "revision": "017545249afd67806be943eae9f18bc2"
  },
  {
    "url": "assets/img/directions_car.c9b170b8.svg",
    "revision": "c9b170b848c5d4b8dd0e61f16bd75c75"
  },
  {
    "url": "assets/img/directions_walk.27f1ba22.svg",
    "revision": "27f1ba221570d364f986a1bc342c3e05"
  },
  {
    "url": "assets/img/done_all.28f39764.svg",
    "revision": "28f397644d2d6fe6c3fde0446891cf26"
  },
  {
    "url": "assets/img/done.89e6f120.svg",
    "revision": "89e6f1201212082536271f14401d3d41"
  },
  {
    "url": "assets/img/flight.1eb2837a.svg",
    "revision": "1eb2837abbb46c402e137802482339bc"
  },
  {
    "url": "assets/img/ledger_logo.8d1c9c23.svg",
    "revision": "8d1c9c23425c3b507e87663b24e54d0e"
  },
  {
    "url": "assets/img/link.98f4f684.svg",
    "revision": "98f4f6841f3d482b15c3a9d79c8db50f"
  },
  {
    "url": "assets/img/logoSync.7d4e71a5.svg",
    "revision": "7d4e71a555356bf3338258bfd8ba32b2"
  },
  {
    "url": "assets/img/menu.55f68494.svg",
    "revision": "55f6849429de279d473c459c7ead3249"
  },
  {
    "url": "assets/img/message.759cf5c9.svg",
    "revision": "759cf5c9195a7ba83dfe7b47cd809ffe"
  },
  {
    "url": "assets/img/more_horiz.d644ed95.svg",
    "revision": "d644ed957e2662b1d22adb890310e64f"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/preview.2a0e91e4.svg",
    "revision": "2a0e91e455559dd783005560c3ffcbe0"
  },
  {
    "url": "assets/img/qr_code_2.b60a5eec.svg",
    "revision": "b60a5eec09a98201dd9a090a00e521bb"
  },
  {
    "url": "assets/img/query_builder.3c7597b2.svg",
    "revision": "3c7597b2a77f9fe763c44489b872ac31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.db5d8122.svg",
    "revision": "db5d8122836517965b6e0247a3a9691c"
  },
  {
    "url": "assets/img/send.5b08a89d.svg",
    "revision": "5b08a89d2dd3351ce4ef110d2909cb23"
  },
  {
    "url": "assets/img/settings.d31d71f9.png",
    "revision": "d31d71f992404bd7970a450cfe4ec99c"
  },
  {
    "url": "assets/img/signing.d77cdae1.png",
    "revision": "d77cdae154a592744275a3b510bf722a"
  },
  {
    "url": "assets/img/unfold_more.52bd8411.svg",
    "revision": "52bd8411f8aea9dba1e636497a1c3d3e"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/img/wallet.08efbe38.png",
    "revision": "08efbe38b38fce44fa3542a9a0dd156d"
  },
  {
    "url": "assets/js/10.4e3fcf79.js",
    "revision": "11d873becc28e9da80fe60da7cd54fb7"
  },
  {
    "url": "assets/js/11.aa7b997a.js",
    "revision": "aed0e4e0f8ede79b8ff6b8737d5d6134"
  },
  {
    "url": "assets/js/12.140810f9.js",
    "revision": "68bf1eaffd05bee4bb9bec89878b5465"
  },
  {
    "url": "assets/js/13.2f0dfaaa.js",
    "revision": "6058750e6a15c84f66e61a15a989b1f0"
  },
  {
    "url": "assets/js/14.5f70f0ab.js",
    "revision": "6a7e48aa3dc89c3b56b38b6ad5d5a402"
  },
  {
    "url": "assets/js/15.def0cbf2.js",
    "revision": "c350bcddad8f57fe90fd83ae4615bb8b"
  },
  {
    "url": "assets/js/16.a5c17d7f.js",
    "revision": "65814badb280946ef6636cc2d3c345fa"
  },
  {
    "url": "assets/js/17.c0658357.js",
    "revision": "df485c943ec73e729376f85d215d955e"
  },
  {
    "url": "assets/js/18.e3ece069.js",
    "revision": "62bbe0ff0e6349b2214d37439b9a551c"
  },
  {
    "url": "assets/js/19.47ce94e6.js",
    "revision": "43a055c1227ab6a159aa91787e030055"
  },
  {
    "url": "assets/js/20.0d05569c.js",
    "revision": "f19dc5b036aaa5644be0170a8d97137a"
  },
  {
    "url": "assets/js/21.d21c06e7.js",
    "revision": "8effa08cbc9057c834a54ed1e7ab5d49"
  },
  {
    "url": "assets/js/22.99e0da62.js",
    "revision": "6670e0225eeec06b21b50d4a67615733"
  },
  {
    "url": "assets/js/23.b32d15de.js",
    "revision": "bc71144f0768782955da1864fa79d4fc"
  },
  {
    "url": "assets/js/24.f5099e4b.js",
    "revision": "4dc5685769581b0889308186355e42aa"
  },
  {
    "url": "assets/js/25.cf9266c6.js",
    "revision": "fa59fda6d108ef0af54b215d80534750"
  },
  {
    "url": "assets/js/26.c1614255.js",
    "revision": "8a311360d8a1473a582d7a604fd6c411"
  },
  {
    "url": "assets/js/27.fdcf9a6e.js",
    "revision": "9f52775f211df1adb1efa0b993a06e83"
  },
  {
    "url": "assets/js/28.79035481.js",
    "revision": "c582fedd3f329caa11672158e2bf3d17"
  },
  {
    "url": "assets/js/29.a5273f09.js",
    "revision": "5a09dfe6a4ad8880e52663a2fe358377"
  },
  {
    "url": "assets/js/3.e90c419f.js",
    "revision": "759e4057624950c95fb0cc8d12ebced2"
  },
  {
    "url": "assets/js/30.47f2a6c6.js",
    "revision": "67de501c372b32a8b239888ec00253fb"
  },
  {
    "url": "assets/js/31.b72bd193.js",
    "revision": "2605ba100a5adac19a4c60f46c95d8f4"
  },
  {
    "url": "assets/js/32.2b8dfbfd.js",
    "revision": "a8846be49955d5bec19fe5e36f2c803e"
  },
  {
    "url": "assets/js/33.1635d41c.js",
    "revision": "4aa8ed7ed4b58cdf7f0a152f2f230775"
  },
  {
    "url": "assets/js/34.a038af96.js",
    "revision": "59a2d12d715cb720a300e8127a25044e"
  },
  {
    "url": "assets/js/35.cecccc1b.js",
    "revision": "40ecc3aaf2f6452d7005334faccd2d06"
  },
  {
    "url": "assets/js/36.87aeded1.js",
    "revision": "227b56aa109067560adf9172bb5e0669"
  },
  {
    "url": "assets/js/37.695ddf94.js",
    "revision": "5f5b4b6e5b66bbd99732d9eb91051164"
  },
  {
    "url": "assets/js/38.0c395e82.js",
    "revision": "b4b7728d79ecc54c4ed55c3d8a9ee1be"
  },
  {
    "url": "assets/js/39.273bd055.js",
    "revision": "2741bdfe0980417f90a74d31ce0a359f"
  },
  {
    "url": "assets/js/4.cb39854c.js",
    "revision": "056b05d2192c5427f8d64301150be96e"
  },
  {
    "url": "assets/js/40.bf30fd5a.js",
    "revision": "38bb7d6cbedd93067a202a82d3d26a93"
  },
  {
    "url": "assets/js/41.39ae6254.js",
    "revision": "e65b2c48e9c89d96d90f58e82129ee77"
  },
  {
    "url": "assets/js/42.1b2b2ba7.js",
    "revision": "b2550d08a98e24e220a99d90b91387bc"
  },
  {
    "url": "assets/js/43.f2e42291.js",
    "revision": "ce261921f093c9d742040f3fa0f48921"
  },
  {
    "url": "assets/js/44.b7c6e3e9.js",
    "revision": "f2f824b5c24a07a3a189162b5a33408e"
  },
  {
    "url": "assets/js/45.880e9a95.js",
    "revision": "fded0b50f8075f3085327492bd686da2"
  },
  {
    "url": "assets/js/46.09195df8.js",
    "revision": "40b06d9c744b425f2d2edc7e64d159e0"
  },
  {
    "url": "assets/js/47.c35da6e2.js",
    "revision": "734d4868e864bcc94187dc62a2d960e2"
  },
  {
    "url": "assets/js/48.0028d74e.js",
    "revision": "7413b00bdef3159cdf0eae0056c3fa51"
  },
  {
    "url": "assets/js/49.85537771.js",
    "revision": "562f24f5f3a88aa860c2cdac5b13f240"
  },
  {
    "url": "assets/js/5.a664ad13.js",
    "revision": "3f04c1cec10b76de75706a9a56debfac"
  },
  {
    "url": "assets/js/50.c5baf764.js",
    "revision": "e590391c7e4b244e8c80a55d08986efc"
  },
  {
    "url": "assets/js/51.4315e86f.js",
    "revision": "25e43d9c6e44ee80717854a91c8ed96c"
  },
  {
    "url": "assets/js/52.609f9fb7.js",
    "revision": "2f919ee75abae73c4d3d596ed6b43240"
  },
  {
    "url": "assets/js/53.a7fb896e.js",
    "revision": "8801595b68478693e75c30efcba850b8"
  },
  {
    "url": "assets/js/54.a2a005b6.js",
    "revision": "3c951c98426fd98267e231af97188e46"
  },
  {
    "url": "assets/js/55.ed436176.js",
    "revision": "088e76295f15918722cf57c015508ab7"
  },
  {
    "url": "assets/js/6.ff62d0f4.js",
    "revision": "af3cad0d842c014f59ddfbb8af2f81fa"
  },
  {
    "url": "assets/js/7.aff2489c.js",
    "revision": "f36edc4ae5b4f68d72f6f60311a7b430"
  },
  {
    "url": "assets/js/8.da6276bf.js",
    "revision": "5bc6e6428d54646ec5062bcf50acacd9"
  },
  {
    "url": "assets/js/9.3b19ffeb.js",
    "revision": "2b171bce30b0bb0e9f5c68be6a6fd0f8"
  },
  {
    "url": "assets/js/app.388c2c68.js",
    "revision": "8c4e15e387edcfcbe26fa0a32d85d74b"
  },
  {
    "url": "assets/js/vendors~docsearch.b15e65d3.js",
    "revision": "b74cf40fe83ff3b84902ef5b48bbc8f5"
  },
  {
    "url": "connex/api.html",
    "revision": "356809306f1264d6811e0c7b73170d63"
  },
  {
    "url": "connex/index.html",
    "revision": "182eac37a47e5546d7d68d92f7f48c82"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "baae23ce91b9aea557ecded2c7e738cd"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "bc8ef88c3d72e1cb79ea8ece9d133636"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "409a0fab57366540ac03143e0e9c3b26"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "8e1cd85fa14abe76cfee826446a0f1bf"
  },
  {
    "url": "sync/faq.html",
    "revision": "e676e42568f108cd084a6740e96c89e7"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "8f9bce0dff9a1072295882b2aa7a78cb"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "6a1aebea52611af4e2e0fb61cc0e7134"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "5cd7a163341420c10ffe9a90d443fe68"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "7176a3b5b4beec674886cf80486bd6e0"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "3aad68e325cf332a55a51f9b35e4781c"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "47ff006f159b00b9ce5cd97996368510"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "14d70baaa03acdfcdc3c1ae5b064c284"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "e3000a5c9191676a7066b3968a028ccd"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "dee23d7613e17fdd772e94af7b1c7e92"
  },
  {
    "url": "sync2/faq.html",
    "revision": "420299251ef2bf3f6fa1fc7a765b6c24"
  },
  {
    "url": "sync2/get-started.html",
    "revision": "9b9db342d4f12f7517ad14a51af8545b"
  },
  {
    "url": "sync2/user-guide/activities.html",
    "revision": "f2aa162bcaa5edffd4b9ab07cf255ace"
  },
  {
    "url": "sync2/user-guide/index.html",
    "revision": "a39292a8778ecf22de7b5be30a77a7b5"
  },
  {
    "url": "sync2/user-guide/settings.html",
    "revision": "6591d5af931d19bb412ba33069bf89f7"
  },
  {
    "url": "sync2/user-guide/signing.html",
    "revision": "283cda8d9cc9a0a82af74832e8bd51cf"
  },
  {
    "url": "sync2/user-guide/wallet.html",
    "revision": "49e15505c5400e0fae43855d96798499"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "584cbcd07748483b7b6b253a12ed912c"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "d67e277273ae0b8ae2cdc245e3506561"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "12590f2c3cfe1f35825c6e24e3a09a08"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "fdd598cf61051f670ccd6e31397a4727"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "f995bf1581cf5dded96cdbf10c9729c1"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "8fe80d7979c602abba31167b1e4c9e00"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "ac43d872a5e9fb075a6248fe249e4a24"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "691a1c7e681ae35188a02400909034ce"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "a82aae79b4b27c3aeba3042853547aba"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "b0f6c202cc94dce8f18bbbae4478efc2"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "542de623d6b50988d710090665a94cc0"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "552f1dcd129d56a31b357d9982d9e264"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "3ded37c0241e69b97949d33672bfb6ee"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "926b6e0d722b1f9d5220136d69fc6490"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "b14a0b9ff16111456b7fc5f9ba84307c"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "314ff4d15da0a10eddfa591056cfdead"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "be459d60fe9809e7db2024dac1db7628"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "256efd90b1d0d7db3866e0206378b6eb"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "0749b3f59d5846854a2b1bb3c11a080c"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "a759aed7f1a247fdfddd7e0fe7bceb2f"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "61e8b6517edbf6757bff7bb169db1f3f"
  },
  {
    "url": "tutorials/index.html",
    "revision": "05e0f6df0bd83216726f54096b6fe21c"
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
