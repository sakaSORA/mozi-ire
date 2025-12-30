const CACHE_NAME = 'text-editor-v2';
const ASSETS = [
  './',
  './index.html', // あなたのHTMLファイル名に合わせて変更してください
  'https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=DotGothic16&family=Kaisei+Tokumin:wght@700&family=Kiwi+Maru:wght@500&family=M+PLUS+1p:wght@800&family=Sawarabi+Mincho&display=swap'
];

// インストール時にキャッシュ
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// リクエストをキャッシュから返す（オフライン対応）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
