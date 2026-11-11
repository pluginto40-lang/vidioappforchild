"""로컬 웹주소로 앱을 열어 YouTube 공식 플레이어를 사용합니다."""

from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import webbrowser


APP_FILES = ("/", "/index.html", "/videos.js", "/manifest.webmanifest", "/sw.js", "/offline.html",
             "/privacy.html", "/support.html")


class AppHandler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, ".webmanifest": "application/manifest+json"}

    def do_GET(self):
        # 앱에 필요한 파일만 제공하며 폴더 목록과 Git 자료는 공개하지 않습니다.
        path = self.path.split("?", 1)[0]
        if path not in APP_FILES and not (path.startswith("/icons/") and path.count("/") == 2 and path.endswith(".png")):
            self.send_error(404)
            return
        super().do_GET()

    def end_headers(self):
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header("Cache-Control", "no-cache")
        super().end_headers()


def main():
    handler = partial(AppHandler, directory=str(Path(__file__).resolve().parent))
    # 주소를 고정해 이전에 저장한 문진 답변을 다음 실행에도 사용합니다.
    try:
        server = ThreadingHTTPServer(("127.0.0.1", 8765), handler)
    except OSError:
        print("앱 주소를 열 수 없어요. 먼저 실행한 앱 창이 있으면 그 창을 사용하거나 닫은 뒤 다시 실행해 주세요.")
        return
    with server:
        url = f"http://127.0.0.1:{server.server_port}/"
        print(f"앱 주소  {url}\n사용하는 동안 이 창을 열어 두세요. 종료하려면 Ctrl+C를 누르세요.", flush=True)
        webbrowser.open(url)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
