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


yarn은 npm보다 가볍고 빠르게 자바스크립트 패키지를 관리 할 수 있게 해주는 자바스크립트 패키지 매니저 툴입니다. 

각자의 장단점이 있지만, 우린 앞으로 패키지 관리자로 yarn을 좀 더 많이 사용하게 됩니다.
