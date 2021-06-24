# 앱개발 준비하기

## 1. 리액트 네이티브 & Expo 소개

### 1) 리액트 네이티브 = 리액트(React) + 네이티브(Native)

리액트 네이티브는 우리가 배운 자바스크립트 언어 하나로 안드로이드 앱과 iOS앱 두 가지 모두 만들어주는 라이브러리입니다.

라이브러리가 뭐냐구요? 개발 할 때 사용하는 **도구**입니다!

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc88c90dc-43f3-43fb-a534-60e27582914f%2FUntitled.png?table=block&id=f6b5db89-8af4-4fd7-99dc-57f11272afb6&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=480&userId=&cache=v2)

그렇지만 정말 리액트 네이티브로만 앱 개발을 진행하면, 자바스크립트 한 언어로 앱 개발이 가능 하다 했지만 그렇지 않음을 알 수 있습니다.

위 이미지에서 볼 수 있듯이 특정 상황에선 안드로이드, iOS 각각의 폴더에 들어가 직접 코드를 만져야 하는 상황이 발생합니다.

안드로이드, iOS 앱을 만들 땐 자바&코틀린과 Swift라는 언어를 써야하는데, 그러면 언어 하나로 앱을 만들 수 있다는 취지에서 벗어나게 됩니다😂

그래서 이에 좀 더 취지에 가깝게, 더 쉽고 빠르고 정말 안드로이드,iOS 개발 언어를 잘 몰라도 리액트 네이티브 앱 개발을 수월하게 도와주는 도구가 존재합니다!

### 2) Expo란?

#### (1) 안드로이드&iOS 코드를 정말 몰라도 개발이 가능!

리액트 네이티브로 앱을 개발할 때, 안드로이드 & iOS 코드를 건드려야 하는 대부분의 상황들을 안 건드려도 되게끔 도와주는 툴입니다. 또한 앱 개발을 편리하게 해주는 도구들이 많이 존재합니다.

Expo에서 제공해주는 공식 문서와 리액트 네이티브 공식 문서만 따라 보면서 앱을 만들면, 마치 미니카 조립하듯 앱이 뚝딱 만들어집니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5b0eaa15-b119-41f5-86bd-7d458fd0802e%2FUntitled.png?table=block&id=de880990-a2ae-4478-b9de-b9a8e38db373&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=960&userId=&cache=v2)

#### (2) 개발 중인 앱을 쉽게 확인해주는 앱 제공

Expo는 개발 중인 앱 테스트를 위한 Expo 클라이언트 앱을 제공해줍니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff8ecc78f-dda2-404a-a301-feefeed5df59%2FUntitled.png?table=block&id=4873b1fb-75a9-4b57-9cb0-0bca257f7a88&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=380&userId=&cache=v2)

- IOS 클라이언트 앱 다운 ([링크](https://apps.apple.com/app/apple-store/id982107779))
- 안드로이드 클라이언트 앱 다운 ([링크](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www))

## 2. 리액트 네이티브 & Expo 설치하기

### 1) Node & NPM 설치

#### (1) Node와 NPM

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5de50d7c-175b-4e6a-b585-2981ea2dec4b%2FUntitled.png?table=block&id=bea02a24-5df0-4759-b143-94904d95dd38&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=860&userId=&cache=v2)

우리는 처음부터 끝까지 자바스크립트로 앱을 만드는 과정을 함께하게 됩니다.
그러나 자바스크립트로 바닥부터 만들어가는 것은 아닙니다.

똑똑한 개발자들이 미리 만들어놓은 자바스크립트 선물 상자들을 가져와서 적재적소에 사용해 나아갑니다. 이때 필요한게 Node고 NPM 입니다. 

우리가 리액트 네이티브로 앱을 개발한다는 것은...

Node.js로 자바스크립트 개발 환경을 구축하고, 
NPM으로 필요한 자바스크립트 앱 개발 도구들을 가져와 사용하는 모습이라 보면 됩니다.

Node.js 공식 홈페이지에서 노드를 설치하면 npm도 같이 설치가 됩니다.
LTS 버전과 Current 버전이 있는데 비교적 안정적인 LTS 버전을 설치하도록 합니다.

[다운로드 링크](https://nodejs.org/ko/download/)

- installer로 다운받아 설치를 진행합니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4b04263f-17e4-444e-9015-f8542b5ad35d%2FUntitled.png?table=block&id=cf217bbe-12b0-4b21-8aee-0f60cd92996b&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=5150&userId=&cache=v2)

설치가 완료되었다면, 

window 노트북은 cmd창에서
mac 노트북은 terminal 창에서 다음을 입력해봅니다.

```jsx
node -v
npm -v
```

각각의 버전을 아래와 같이 확인 할 수 있다면 정상적으로 설치가 완료된 것 입니다.

```
oneonlee  ~  node -v                                         ✔
v14.17.1
oneonlee  ~  npm -v                                          ✔
6.14.13
oneonlee  ~  
```

#### (2) Yarn

맥은 terminal, 윈도우는 cmd 검은 창에 다음과 같이 순서대로 입력해보도록 하겠습니다.

지금 설치하고 배우는 명령어들은 잘 몰라도, 앱 개발하는 데 전혀 문제가 없습니다.<br>
이 명령어들을 언제 어떤걸 써서 필요한 자바스크립트 개발 도구를 설치해야 하는지는 Expo 앱 개발 설명서에 다 나와 있어요!

도구를 가져와 설치하는 npm 의 설치 명령어 install과 
컴퓨터 어디서든 설치하고 있는 도구를 사용할 수 있게 해주는 -g 옵션 명령어

`npm install -g yarn`로 설치를 완료한 다음,

`yarn -v`로 버전확인을 해줌으로서 제대로 설치가 되었는지 확인할 수 있습니다.

##### [macOS] 맥을 사용하는데 `npm install -g yarn` 또는 `npm install -g expo` 을 진행하니 EACCES 권한 오류가 발생하는 경우 (`Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`)

관리자 권한 취득 후 설치하는 명령어인 아래 명령어로 설치를 진행해 주세요!

```jsx
**sudo** npm install -g yarn expo-cli
```

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F3c9f311d-608b-4bee-bb73-0a58623cc2fe%2FUntitled.png?table=block&id=b2c89e1c-7cf7-44c8-850b-459db7482b74&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=350&userId=&cache=v2)

sudo 명령어를 사용하면 위와 같이 자물쇠 모양이 나오는데요, 맥의 비밀번호를 입력해주세요! ***이때 암호가 입력이 안 되는 것처럼 보이지만 실제로는 입력이 잘 되고 있는 것이니 입력을 하시고 엔터를 쳐주세요!***

### 2) Expo 명령어 도구 설치

- 이제 노드(Node.js)와 노드 패키지 매니저(npm)까지 설치가 완료되었으므로, 본격적으로 Expo 명령어 도구를 여러분 컴퓨터에 설치할 차례입니다. 
  - 이 Expo 명령어로 우린 앱도 생성하고, 필요한 앱 개발 도구도 설치합니다

- 만약, 맥 사용자분들은 npm 명령으로 도구들을 설치할 때 "permission denied"라는 오류가 발생하면, 당황하지말고 sudo를 앞에 붙여주세요
  - `sudo npm install -g expo-cli`
    - 그래도 안 된다면, `sudo npm install -g yarn expo-cli`
  - 여러분들 컴퓨터 깊숙이 설치하는 과정이라 권한이 없다는 이야기로 보시면 됩니다!
  - 그럴때 sudo를 앞에 붙여 나 이 컴퓨터 주인이다! 라고 알려주시면 돼요!

```jsx
npm install -g expo-cli
```

- 이 명령어 한 줄은 이런 의미가 담겨 있습니다.
  - **npm**: 노드 패키지 매니저 명령을 실행하겠다
  - **install**: 설치하겠다
  - **-g**: 컴퓨터 전역적으로 설치하겠다 == 어디서든지 -g 다음에 오는 명령어를 사용할 수 있게끔!
  - **expo-cli**: 설치 할 패키지 이름

- 따라서 우린 이 명령어 한 줄로, 여러분 컴퓨터 어디서든지 Expo를 사용할 수 있게끔 패키지를 전역적으로 설치했습니다.

- Expo를 설치 및 사용한다는 것은, Expo가 기본적으로 제공해주는 명령어들...
  - 1) 프로젝트 생성,
  - 2) 프로젝트 실행,
  - 3) 프로젝트 빌드 
  - 등등의 여러 기능들을 사용 할 수 있다는 것을 뜻합니다.

- 실제 사용 방법은 다음 시뮬레이터 설치 후 확인해보도록 하겠습니다!

### 3) Expo 가입 및 로컬에 Expo 계정 세팅

Expo로 개발중인 앱을 마켓에 배포하기 위해선 여러분들 컴퓨터에 Expo 계정을 세팅해야 합니다. 그래야 추후에 배포 앱 관리와 배포를 한번에! 진행할 수 있습니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F387ccb4e-1967-4fe7-a2ce-5039c14823a9%2FUntitled.png?table=block&id=997f3342-4fc9-4deb-b141-0cf35f29cc85&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=4000&userId=&cache=v2)

#### (1) Expo 가입

[가입 링크](https://expo.io/signup)에서 실제 가입을 진행합니다.<br/>

<img width="1224" alt="스크린샷 2021-06-24 오후 10 05 45" src="https://user-images.githubusercontent.com/73745836/123267774-56700980-d538-11eb-8b89-5e5fcd3f1dc2.png">

#### (2) 로컬에 Expo 계정 세팅

Expo 계정을 생성했으면, 여러분들 컴퓨터에 Expo 계정을 연결시켜줘야 합니다. 어려운 일은 아니고 여러분 컴퓨터로 해당 계정으로 로그인을 하면 되는데요!

`윈도우는 cmd`, 
`맥은 terminal`에서 다음 명령어를 실행합니다.

```
expo login --username "Expo 사이트 가입 당시 입력한 name"
...
```
expo 패스워드 입력란이 차례로 나오고, 차례대로 입력하면 로그인 성공!

### 4) Expo 앱 생성 및 실행하기

- 이제 여러분 생에 최초로 리액트 네이티브 & Expo 앱을 생성할 때가 왔습니다. 
- 지금까지 Node, npm 설치하랴, 시뮬레이터 설치하랴, 정신이 없으셨죠? 
- Node니 npm이니 yarn등 개념을 정확히 몰라도 앱 개발에 아무 문제 없습니다!
- 지금부터 본격적으로 Expo 앱을 만들고 웹 브라우저에서 앱을 확인해볼거예요! 차근차근 따라해봅시다.

- 바탕화면에 앞으로 여러분들이 만들기도 하고 연습도 할 작업 공간인 폴더 하나를 만들어주세요. 이름은 `RN-study` 로 만들어주세요!
- 해당 폴더를 VSCode에서 열어주세요.
- 이제 Expo 명령어를 치기 위해 에디터 상의 터미널을 엽니다. 
  - Mac
    - <img width="496" alt="스크린샷 2021-06-24 오후 10 15 25" src="https://user-images.githubusercontent.com/73745836/123269162-b0250380-d539-11eb-8add-da9fe4c83bc2.png"><br/>
  - Windows
    - <img width="844" alt="스크린샷 2021-06-24 오후 10 24 35" src="https://user-images.githubusercontent.com/73745836/123270546-f75fc400-d53a-11eb-9785-13fd243ec976.png">
    - 윈도우 노트북 사용자 분들은 위 캡쳐이미지와 같은 에러를 볼 수도 있습니다! 그럴 경우 다음 절차대로 한번 진행해보세요!
    - 윈도우 노트북 사용자분들 중에 vscode 에디터 상에서 expo init 또는 expo start를 하니 권한 문제가 발생한다!
    - vscode를 다음 순서대로 실행시켜보세요!
      1) VSCode를 실행하고 Ctrl + Shift + P 조합키를 입력합니다. (아마 모든 설정 검색 창)
      2) "shell"이라고 입력합니다.
      3) "Treminal: Select Default Shell"을 클릭합니다.
      4) "Comand Prompt C:\Windows\System32\cmd.exe"를 클릭합니다.
      5) VScode를 재실행 하면 제일 아래 "PS"로 시작하던 것이 없어졌을 것이고 이는 CMD로 바뀌었다는 의미가 됩니다.

- 그럼 에디터 하단에 우리가 명령어를 칠 수 있는 공간이 확보됩니다. 거기에 다음 명령어를 입력해주세요.
  - ```expo init myhoneytip-영어이름```
    - `expo`는 Expo 명령어를 사용하겠다.
    - `init`은 Expo 앱을 생성하는 Expo 명령어!
    - `myhoneytip-영어이름`은 앱 이름!
      - 자기 자신만의 고유한 앱 이름을 위해 이렇게 짓도록 하겠습니다.

- 그럼 터미널에서 어떤 유형의 Expo 앱을 만들어줄까? 물어보는데, blank를 선택해주세요.

- 그러면 조금 이따 Expo 앱이 완료되었다고 터미널에 나타납니다. 그리고 왼편에 프로젝트 앱 폴더도 생성된 것을 확인 할 수 있습니다.
  - Expo 앱이 완료되었단 뜻은, 위에서 우리가 고른 blank 타입의 앱. 즉, Expo가 제공 해주는 스타터 키트같은 기본앱을 만들어 제공해주는 것입니다. 
  - 따라서 우린 앞으로 Expo가 만들어준 기본 앱을 수정하며 앱을 만들어 나갑니다

- 너무 간단하죠? 하지만 아직 완전히 끝나지 않았습니다. 
- 여러분들은 현재 Expo앱을 부모 폴더에서 만들고 부모 폴더에 존재합니다. 무슨 말이냐구요? 
- 내컴퓨터에 C드라이브를 바라보고 있으면 C드라이브 안의 내용물들을 볼 수 없는 것처럼, 여러분들 터미널상에서 여러분들의 위치는 방금 만든 Expo앱을 바라보고 있을 뿐입니다.
- 즉, 여러분들은 이제 여러분들이 만든 Expo앱 폴더 안으로 들어가야 하는데요! 터미널에서 이렇게 명령어를 치면 됩니다.
  - ``cd myhoneytip-아까만든영어이름``
    - ``cd <폴더명>`` : change directory의 약자로 입력한 폴더명으로 이동하는 명령어입니다.
    - 커맨드 창에서 뒤로가기는 뭘까?
      - ``cd ..`입니다. (`cd + 띄고 + ..`)

- 그럼 이제 여러분들이 만든 폴더 안으로 들어왔으므로 생성한 Expo앱을 실행해봅시다. 
  - `expo start` 명령어를 실행하면 터미널에 Expo 실행이 진행되며, 자동으로 브라우저가 열리면서 Expo 앱을 열 준비를 합니다.
  - `expo start` 명령어는 Expo 서버를 킨 것과 동일합니다.
  - Expo 서버를 킨다는 것은 현재 개발하고 있는 앱을 실행시킨다는 뜻과 같습니다.
  - 반대로 서버를 끌땐?
    - 윈도우 : 컨트롤 + c
    - 맥 : command + c
  - 앱을 실행시키고 나면 expo 앱을 어디서 확인 할 지는 선택해야 합니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F01d4effa-7d6a-42b6-b52f-837308576008%2FUntitled.png?table=block&id=bccb6a33-40fd-4e8d-93db-475c9d3d9d6b&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=3810&userId=&cache=v2)

자동으로 열린 Expo 개발자 도구 왼편에는 여러 버튼이 존재합니다.

- Run on Android device/emulator
  - 컴퓨터와 USB로 연결된 안드로이드 휴대폰 또는 우리가 설치한 안드로이드 시뮬레이터로 Expo을 실행시키는 버튼

- Run on iOS simulator
  - 설치한 iOS 시뮬레이터로 Expo 앱을 실행시키는 버튼

- Run in web browser
  - 작업중인 Expo 앱을 브라우저에서 확인 하는 버튼. 즉, 웹 플랫폼에 대응 하게끔 지원
  - 왼쪽 버튼 중에서*Run in web browser를 눌러보면!
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fd3987f79-7a5e-4b16-870e-3eb7d496d815%2FUntitled.png?table=block&id=386c0de0-3919-45b0-a130-c94632d5412a&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=3960&userId=&cache=v2)

- Send link with email
  - 작업 중인 Expo 앱은 Expo 클라이언트 앱이 설치되어 있는 휴대폰 어디서든 실행할 수 있습니다. 즉 이 때 개발중인 Expo앱 링크를 통해서도 바로 Expo 클라이언트 앱으로 개발중인 앱 확인이 가능합니다.

- Public or republish project
  - 앱을 여러분 계정의 Expo 공식사이트에 업로드합니다. 
  - Expo 공식 사이트에 개발한 앱을 배포하게되면, 사이트에서 안드로이드 용 APK파일 혹은 IOS용 ipa 파일을 빌드하여 다운로드 받을 수 있습니다. 
  - 그럼 우린 이걸 가지고 직접 안드로이드 마켓 혹은 애플 스토어에 앱을 출시할 수 있습니다. 
  - 배포관련해서는 우리가 앱 개발 기술을 모두 배운 후 다시 다룰 주제라, 지금은 이런게 있구나 정도로 알고 넘어가면 충분합니다! 어쨋든 Expo는 배포도 쉽게 도와주는 친구!

- 초반에 리액트 네이티브 & Expo는 안드로이드, IOS, 웹 세 플랫폼에 대응하는 애플리케이션을 만들 수 있다고 언급한 바 있습니다. 바로 지금 우리는 세 플랫폼 중 웹에서 애플리케이션을 띄워 본겁니다!

- 그런데 `expo start` 명령어 실행 결과를 보면, QR코드가 나타나는 것을 볼 수 있습니다. 
- 여러분들 휴대폰에 Expo 클라이언트 앱이 설치되어 있단 가정하에, 휴대폰 카메라로 저 QR코드를 인식해보시기 바랍니다. 

- 그럼 여러분들 휴대폰에 설치되어 있는 Expo 클라이언트 앱을 열까? 라고 물어보며 켜줘!라고 클릭을 하게되면, 지금 컴퓨터에서 여러분들이 expo start로 실행시킨 Expo 서버 위에서 돌아가고 있는 Expo 앱을 휴대폰에서, 더 정확히는 Expo 클라이언트 앱에서 확인 할 수 있습니다.
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1b7f956e-d97b-45d9-ac6b-89c2ca4fac83%2FUntitled.png?table=block&id=5f61e82d-270b-4e3b-b0f7-39136c575a61&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2220&userId=&cache=v2)

- 또한 `expo start` 명령어를 실행시켰을 때, 자동적으로 열렸던 크롬 브라우저의 expo 개발자 도구 화면에서 우측 상단의 버튼을 누르면 다음과 같이 화면이 분할 되면서 Expo 웹 플랫폼 앱과 현재 여러분 휴대폰에서 실행되고 있는 앱 플랫폼에 대한 상태 로그들을 동시에 확인 할 수 있게 됩니다.
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fbfa11856-fb83-4313-9e26-657a458c9448%2FUntitled.png?table=block&id=6a55c395-13f4-4365-a2fb-77ed3c049df7&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=5740&userId=&cache=v2)

- 유의 사항
  - 1. 간혹 Expo 버전에 따라 위 화면에서 화면 분할이 되지 않아, 개발 중인 앱의 상태 로그를 볼 수 없는 경우도 있습니다. 그럴땐, 당황하지 않고! vscode 상에서 expo start 명령어를 쳤던 터미널을 보시면 로그들을 확인 할 수도 있습니다!!
    - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Ff3df92eb-36d6-42bb-ad25-348e410c96e8%2FUntitled.png?table=block&id=57887672-921f-40fe-8389-317abdd35d4d&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=5110&userId=&cache=v2)
  - 2. 연결이 안되시는 분들이 간혹 있습니다!. 그럴땐 두 가지를 체크해보면 좋습니다.
    - (1) 컴퓨터가 연결된 와이파이와 앱을 실행시키는 휴대폰에 연결된 와이파이가 동일한지!
    - (2) 왼쪽 하단 QR 코드 위에 , Tunnel, Lan, Local  모두 눌러보면서 되는 환경을 찾아보기!
  - (2)의 이유는, 각 컴퓨터 마다 환경 설정이 다르기 때문입니다. 방화벽이 그 이유일 수도 있구요! 네트워크 환경이 다를 수도 있습니다. 그렇기 때문에, 정상적으로 실행되는 환경을 찾아보시길 추천 드립니다!
