// 앱 파일만 저장해 두고, 인터넷이 끊기면 안내 화면을 보여줘요.
// 앱 파일을 바꿔 올렸는데 핸드폰에 예전 화면이 남으면 아래 이름의 숫자를 하나 올려 주세요.
const CACHE = "app-v1";
const FILES = ["./", "index.html", "videos.js", "offline.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  const req = e.request;
  // 유튜브 영상·썸네일 등 다른 사이트 자료는 저장하지 않고 그대로 보내요.
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  // 화면(index.html)과 영상 목록(videos.js)은 인터넷에서 먼저 받아 새 내용이 바로 보이게 해요.
  if (req.mode === "navigate" || req.url.endsWith("/videos.js")) {
    e.respondWith(fetch(req).catch(() =>
      caches.match(req.mode === "navigate" ? "offline.html" : req)));
    return;
  }
  // 아이콘 같은 나머지 앱 파일은 저장해 둔 것을 먼저 써요.
  e.respondWith(caches.match(req).then(hit => hit || fetch(req)));
});
