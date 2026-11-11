# 안드로이드 앱(TWA) 만들기 안내

이 폴더는 웹앱(https://pluginto40-lang.github.io/vidioappforchild/)을 그대로 띄우는
안드로이드 앱 프로젝트예요. 구글 공식 도구 **Bubblewrap**으로 만들었어요.
웹사이트를 고치면 앱에도 바로 반영되니, **웹만 바꿀 때는 앱을 다시 만들 필요가 없어요.**
앱 이름·아이콘·색처럼 앱 자체 설정을 바꾸거나 Play에 새 버전을 올릴 때만 다시 빌드해요.

## 기본 정보

| 항목 | 값 |
|---|---|
| 패키지 이름(바꿀 수 없음) | `io.github.pluginto40_lang.kidvideo` |
| 시작 주소 | `https://pluginto40-lang.github.io/vidioappforchild/` |
| 최소 안드로이드 버전 | 7.0 (minSdk 24) |
| 서명 키 위치 | `C:\Users\Pc\Documents\android-keys\kidvideo.keystore` (키 이름 `kidvideo`) |
| 설정 파일 | `twa-manifest.json` (앱 설정은 여기서 바꿔요) |

## 서명 키 — 가장 중요해요

- 서명 키는 앱의 "도장"이에요. **업데이트할 때마다 같은 도장이 필요해요.**
- 키 파일은 **이 저장소 밖**(문서 폴더)에 있어요. 저장소는 공개라서 절대 여기에 넣지 마세요.
  `.gitignore`가 `*.keystore`, `*.jks`, `*.aab`, `*.apk`를 막고 있어요.
- 키 파일을 USB나 개인 클라우드에 **백업**하고, 비밀번호는 비밀번호 관리자나 종이에 따로 적어 두세요.
- 키나 비밀번호를 잃으면 이 앱을 업데이트하지 못할 수 있어요.
  (Play Console에서 **Play 앱 서명**을 쓰면 구글에 "업로드 키 재설정"을 요청할 수 있어요.)

## 처음 한 번만 준비된 것 (이 컴퓨터 기준)

- 자바(JDK 17)와 안드로이드 SDK: `C:\Users\Pc\.bubblewrap\` 아래
- Bubblewrap 프로그램: `C:\Users\Pc\.bubblewrap\cli\bubblewrap.cmd`
- 빌드용 바로가기 폴더: `C:\Users\Pc\.bubblewrap\kidvideo-android` → 이 `android` 폴더를 가리켜요
- 빌드 한 번에 하는 파일: `C:\Users\Pc\.bubblewrap\build-kidvideo.cmd`

> 참고: Claude 앱 안의 터미널은 "현재 폴더의 프로그램 실행 금지" 설정이 켜져 있어서
> 그냥 `bubblewrap build`를 치면 `gradlew.bat`을 못 찾는다는 오류가 나요.
> `build-kidvideo.cmd`가 이 설정을 끄고 빌드해 줘요.

## 다시 빌드하는 법

PowerShell에서 아래 한 줄을 실행하고, 비밀번호를 물으면 **키를 만들 때 정한 비밀번호를 두 번** 입력해요.

```
& 'C:\Users\Pc\.bubblewrap\build-kidvideo.cmd'
```

끝나면 이 `android` 폴더에 파일이 생겨요.

- `app-release-bundle.aab` → **Play Console에 올리는 파일**
- `app-release-signed.apk` → 폰에 직접 설치해서 시험해 보는 파일

## 새 버전으로 올리기(버전 올리기)

Play에는 **같은 버전 번호로 두 번 올릴 수 없어요.** 새로 올릴 때마다 버전을 올려요.

1. 이 폴더로 이동해서 업데이트 명령을 실행해요.
   ```
   cd 'C:\Users\Pc\.bubblewrap\kidvideo-android'
   & 'C:\Users\Pc\.bubblewrap\cli\bubblewrap.cmd' update
   ```
   새 버전 이름을 물으면 `2`, `3`처럼 이전보다 큰 숫자를 입력해요.
   (내부 버전 번호 `appVersionCode`는 자동으로 1씩 올라가요.)
2. 위의 "다시 빌드하는 법"대로 빌드해요.
3. 바뀐 `twa-manifest.json`, `app/build.gradle` 등을 커밋해요. (aab/apk는 커밋되지 않아요.)

앱 이름·색·아이콘 주소를 바꾸고 싶으면 `twa-manifest.json`을 고친 뒤 1번부터 하면 돼요.

## 폰에 직접 설치해 보기

1. `app-release-signed.apk`를 폰으로 옮겨요(카카오톡 나에게 보내기, USB, 구글 드라이브 등).
2. 폰에서 파일을 눌러 설치해요. "출처를 알 수 없는 앱" 허용을 물으면 허용해요.
3. 앱 위쪽에 주소창이 보이면 아래 **Digital Asset Links**가 아직 연결되지 않은 거예요.
   기능은 그대로 쓸 수 있어요.

## Digital Asset Links (`assetlinks.json`)

주소창 없이 앱처럼 보이려면 "이 웹사이트와 이 앱은 같은 주인"이라는 증명 파일이 필요해요.

- 내용은 이 폴더의 `assetlinks.json`에 준비돼 있어요. (지문은 공개해도 되는 정보예요.)
- 이 파일은 **도메인 맨 위**인 `https://pluginto40-lang.github.io/.well-known/assetlinks.json`에 있어야 해요.
  지금 사이트는 `/vidioappforchild/` 아래에 있어서, 올릴 곳은 따로 정해야 해요.
- **Play 앱 서명**을 쓰면 구글이 최종 서명을 다시 해요. 그때는 Play Console →
  앱 무결성 → 앱 서명에 나오는 **"앱 서명 키 인증서 SHA-256 지문"**도
  `sha256_cert_fingerprints` 목록에 추가해야 해요.
  (지금 들어 있는 지문은 우리 업로드 키의 지문이에요.)
