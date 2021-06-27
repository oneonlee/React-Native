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

`App.js`는 JSX 문법으로 그려져 준비된 화면을 반환합니다.<br/>
반환 한다는 게 잘 와닿지 않다면, 단순히 화면을 그려준다 생각하면 편합니다.

즉, 리액트 네이티브에서 `return`은 여러분이 작성한 JSX 문법으로 구성된 화면을 앱상에 보여주는 역할을 하는 겁니다.  

😁 JSX문법을 화면에 그려준다는 행위, 동작을 이제 우린 **렌더링(rendering)**이라 부릅니다.

`<View>` `<Text>`와 같이 꺽쇠로 쓰여져 있는 것들은 리액트 네이티브에서 JSX라고 부릅니다. 또 하나의 화면을 그리는 문법입니다. 

😁 JSX 문법상의 꺽쇠를 **태그**라고 부르고, <br/>
`<View>`영역`</View>`과 같이 닫는 태그로 온전히 화면의 한 영역을 구성할 때 JSX에선 **엘리먼트**라 부릅니다.

화면을 구성하는 최소한의 영역정도의 의미를 갖고 있습니다.
이 JSX 문법은 사용방법이 정해져있습니다.

- (1) 모든 태그는 가져와서 사용함

우리가 앞으로 사용할 태그들, `View`나 `Text` 같은 문법은 임의로 만든 태그들이 아닙니다. 리액트 네이티브에서 제공해주는, 이미 존재하는 태그 문법을 가져와서 사용하는 겁니다. `App.js` 파일 상단을 보면 우리가 화면을 그릴 때 사용할 태그들을 가져와 준비해 놓습니다.

뭘 사용하고 어떻게 사용할지는 설명서를 보면서 그대~로 적용하면 됩니다

[공식 사용 설명서](https://docs.expo.io/versions/v38.0.0/react-native/view/)

```jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
return (
<**View** style={styles.container}>
  <**Text**>Open up App.js to start working on your app!</Text>
  <**StatusBar** style="auto" />
</View>
);
}
```

- (2) 태그는 항상 닫는 태그와 자체적으로 닫는 태그를 구분해서 사용해야 함!

```jsx
export default function App() {
return (
	// <View>는 결국 두번째 줄 밑에 </View>로 닫히면서 본인 영역을 갖습니다 
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
		// statusBar는 본인 스스로 닫는 태그이므로 다음과 같이 사용이 가능합니다.
  <StatusBar style="auto" />
</View>
);
}
```

어떤 태그는 닫고 어떤 태그는 스스로 닫히는지 어떻게 아냐구요? 우린 결국 리액트 네이티브 공식문서와 Expo 공식문서를 보면서 사용법에 따라 앱을 개발하므로, 공식 문서에 보면 사용법이 나와 있습니다. 

- 리액트 네이티브 공식 문서
https://reactnative.dev/docs/view

- Expo 공식 문서
https://docs.expo.io/versions/v38.0.0/react-native/view/

공식 문서를 보며 개발하는 방법은 JSX문법을 배우며 차차 더 알아갈 예정입니다.

- (3) 모든 엘리먼트는 감싸는 최상위 엘리먼트가 있어야 함. 엘리먼트는 곧! 태그 `<>` 입니다

```jsx
// App.js가 렌더링 하고 엘리먼트는 결국
// Text와 StatusBar엘리먼트를 감싸고 잇는 View입니다.
export default function App() {
return (
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View>
);
}
```

다음과 같이 감싸는 엘리먼트가 없다면 오류가 발생합니다.

```jsx
// View 엘리먼트 밖에 StatusBar가 나와 있으므로 엘리먼트 전체를 감싸는 엘리먼트가 
// 없어서 오류가 납니다.
export default function App() {
return (
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
</View>
	<StatusBar style="auto" />
);
}
```

꼭 감싸는 엘리먼트 없이, 혹은 추후 디자인적인 측면을 위해 없이 진행해야 한다면, 다음과 같이 프래그먼트라는 의미없는 엘리먼트로 감싸서 렌더링 할 수도 있습니다.

하지만 이 방법은 지양해야하는 방식입니다. 

```jsx

export default function App() {
return (
 **<>**
<View style={styles.container}>
  <Text>Open up App.js to start working on your app!</Text>
</View>
	<StatusBar style="auto" />
</>
);
}
```

- (4) `return`에 의해 렌더링 될 땐 항상 소괄호로 감싸져야 한다.

눈치챈 분도 있겠지만, `return` 구문으로 엘리먼트를 렌더링(반환) 할 때 소괄호로 항상 감싸여 있었습니다.

이 세 가지 JSX 문법을 꼭 준수하면서 화면을 그려 나가 봅시다!

- (5) JSX 문법 밖에서의 주석과 안에서의 주석은 다르다!

개발을 할 때 코멘트, 즉 주석을 남기는 일은 중요합니다. 주석은 다음과 같이 작성 할 수 있습니다.

```jsx
// JSX밖에서의 주석
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// JSX밖에서의 주석
export default function App() {
// JSX밖에서의 주석
return (
	// JSX 밖에서의 주석
<View style={styles.container}>
		{/*
			JSX 문법 안에서의 주석
		*/}
  <Text>Open up App.js to start working on your app!</Text>
  <StatusBar style="auto" />
</View>
);
}

// JSX밖에서의 주석
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
alignItems: 'center',
justifyContent: 'center',
},
});
```
      
## 2. View

``jsx
<View></View>
``

화면의 영역(레이아웃)을 잡아주는 엘리먼트입니다. 현재 App.js 상에서 View는 화면 전체 영역을 가집니다. 우리는 이 View 엘리먼트로 다음과 같이 화면을 원하는 대로 분할 할 수도 있습니다.

```jsx
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainerOne}></View>
      <View style={styles.subContainerTwo}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainerOne: {
    flex:1,
    backgroundColor:"yellow"
  },
  subContainerTwo: {
    flex:1,
    backgroundColor:"green"
  }
});
```

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8d03e24b-54a1-46b0-a602-b708578fb55e%2FUntitled.png?table=block&id=1afc82e8-0daf-4c5e-80a0-167b3535b701&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=5380&userId=&cache=v2)

하지만 View로 화면을 분할하고 영역을 잡아나가려면 오늘 배울 스타일 문법(StyleSheet)과 같이 사용해야 가능합니다.

따라서 여기서 View는 화면의 영역을 잡는 엘리먼트라고만 알아두고, 강의를 진행하며 자세히 다루면서 연습해 나아가겠습니다.

## 3. Text

앱에 글을 작성하려면 반드시 사용해야하는 엘리먼트입니다. <br/>
방금 전 위에서 배운 View 엘리먼트 안에서 문자를 작성하면 오류가 발생합니다.

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faceb67c8-05ea-4929-bd19-b433f5630eca%2FUntitled.png?table=block&id=4f993dc9-086c-46b8-a12f-21ebc0d84e7c&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2630&userId=&cache=v2)

## 4. ScrollView

앱 화면을 벗어나는 영역의 경우 `ScrollView` 엘리먼트로 감싸면 스크롤이 가능해지면서 모든 컨텐츠를 볼 수 있습니다. 다음 코드를 복사 붙여넣기 해보세요!

좀 길어보이지만 같은 코드 복붙을 여러번 한 코드입니다 😉

```jsx
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
		//각 태그들에는 style이라는 속성을 갖습니다.
		//이 속성은 파일 최하단에 작성한 스타일 코드 객체의 키 값을 부여해
    // 엘리먼트들에 스타일을 줄 수 있습니다.
    //이는 JSX문법을 배우고 난 다음 더 자세히 다룹니다.
    <View style={styles.container}>
			{/* //보인 영역을 갖는 엘리먼트 7가 반복적으로 쓰였습니다. */}
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </View>
  );
}

//텍스트가 영역을 갖고, 가운데 정렬도 하며, 테두리 스타일을 갖게 끔 하는 코드입니다.
//JSX를 마저 배우고 스타일에 대해 자세히 다루니
//걱정 안해도 좋습니다!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});
```

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F4c98beb5-13cb-45d4-a4bb-8a348786d50d%2FUntitled.png?table=block&id=e752a3ee-f813-4e95-81ac-f7408a700400&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2670&userId=&cache=v2)

충분히 많은 엘리먼트들을 복붙했고, 화면에는 마지막 부분이 짤려서 보이질 않습니다. 이를 다음과 같이 ScrollView를 상단에서 불러온다음 전체 엘리먼트를 Viewrk 아닌 ScrollView로 감싸보세요.

그러면 화면이 스크롤되면서 가려진 영역을 볼 수 있습니다 😉

```jsx
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>영역을 충분히 갖는 텍스트 입니다!</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    borderColor:'#000',
    borderWidth:1,
    borderRadius:10,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  }
});
```

## 5. Button

대부분 앱엔, 버튼이 당연히 있죠? 그리고 그 버튼을 누르면 팝업이 뜨기도하고, 다른 페이지로 넘어가기도 하며 이 밖의 다양한 기능들이 실행됩니다.

우리도 그 버튼을 손쉽게 화면에 달 수 있습니다. 다음 코드를 App.js에 넣어주세요

```jsx
import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>아래 버튼을 눌러주세요</Text>
        {/* 버튼 onPress 속성에 일반 함수를 연결 할 수 있습니다. */}
        <Button 
          style={styles.buttonStyle} 
          title="버튼입니다 "
          color="#f194ff" 
          onPress={function(){
            Alert.alert('팝업 알람입니다!!')
          }}
        />
        {/* ES6 문법으로 배웠던 화살표 함수로 연결 할 수도 있습니다. */}
        <Button 
            style={styles.buttonStyle} 
            title="버튼입니다 "
            color="#FF0000" 
            onPress={()=>{
              Alert.alert('팝업 알람입니다!!')
            }}
          />
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    height:100,
    margin:10,
  },
  textStyle: {
    textAlign:"center"
  },
});
```

## 6. TouchableOpacity

## 7. Image

## 8. 구성한 화면 꾸미기, Styles

### 1) 모든 태그에 공통적으로 있는 styles 속성

### 2) 화면을 꾸며주는 `StyleSheet` 문법

## 9. 컨텐츠의 위치 : Flex

## 10. 메인화면 꾸미기

## 11. 메인화면 완성














