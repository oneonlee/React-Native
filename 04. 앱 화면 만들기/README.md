# 앱 화면 만들기

## 0. `App.js` 살펴보기

App.js를 소개하자면

1) 간단히는  App.js는 앱의 화면을 그려주는 커다란 함수입니다.  또는!
2) 자세히는 App.js는 리액트 네이티브 라이브러리, 그리고 Expo에서 제공해주는 기능들을 사용하여 화면을 그려주는 커다란 함수입니다.

여러분이 `expo start`로 시뮬레이터에 띄운 앱의 화면을 보면 App 함수에 기입되어 있는 글귀가 보이고 있음을 확인 할 수 있습니다.

"Open up App.js to start working on your app!"

화면을 보여주고 있는게 맞죠?
코드를 위에서부터 보면서 찬찬히 살펴보겠습니다.

```jsx
// 우리가 리액트, 리액트 네이티브, 엑스포 라이브러리에서 꺼내 사용할 기능들을
// 이렇게 앞으로도 상단에 선언한 다음 가져다 사용합니다.
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// App.js는 결국 App 함수를 내보내기 하고 있는 자바스크립트 파일입니다.
// 이 함수는 무언가?를 반환하고 있는데 결국 화면을 반환하고 있습니다.
export default function App() {
	// 화면을 반환합니다.
	// HTML 태그 같이 생긴 이 문법은 JSX라 불리우며 실제 화면을 그리는 문법입니다.
	// 이번에 자세히 다룹니다
	console.disableYellowBox = true;
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

// styles 변수 이름 답게 화면을 그려주는, 
// 더 자세히는 JSX문법을 꾸며주는 내용을 담고 있습니다.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

TIP!!<br/>
리액트 네이티브를 개발하다보면 노란색 경고창이 뜨는 경우가 있습니다.<br/>
에러는 아니고 권장사항 정도를 알려주는 박스인데요! 다음과 같은 모습입니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F475994a7-8071-487d-92b6-17d6f5e9baa8%2FUntitled.png?table=block&id=d28e0d51-9f26-43e4-b5ec-fa71c5298ec8&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1560&userId=&cache=v2)

이를 App.js에 다음 코드 한 줄을 넣어서 안보이게 할 수 있습니다.<br/>
```console.disableYellowBox = true;```

- 노란색 경고창 안보이게 하기

```jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  **console.disableYellowBox = true;**

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

## 1. JSX 기본 문법
      
## 2. View

## 3. Text

## 4. ScrollView

## 5. Button

## 6. TouchableOpacity

## 7. Image

## 8. 구성한 화면 꾸미기, Styles

### 1) 모든 태그에 공통적으로 있는 styles 속성

### 2) 화면을 꾸며주는 `StyleSheet` 문법

## 9. 컨텐츠의 위치 : Flex

## 10. 메인화면 꾸미기

## 11. 메인화면 완성














