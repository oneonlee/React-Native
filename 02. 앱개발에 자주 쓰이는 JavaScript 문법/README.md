# 앱개발에 자주 쓰이는 JavaScript 문법

## 1. 화살표 함수 - 함수를 더 짧게!

기존에는 함수를 선언하기 위해서 `function` 키워드를 사용했습니다. <br/>
이를 화살표 함수 (Arrow Function) 문법으로도 선언이 가능합니다.

```js
// [기존 방식]

let a = function() {
  console.log("function");
}
a();
```

```js
// [최신 방식]

let a = () => {
  console.log("arrow function");
}
a();
```

## 2. 비구조 할당 - 딕셔너리 키와 값을 빠르게 꺼내기!

딕셔너리에 있는 값을 꺼내 변수에 담을 때, 할당 과정을 거치기 않으면서 딕셔너리의 키 값 그대로 변수사용이 가능합니다.

```jsx
// 객체 
let blog = {
	owner : "noah",
	url : "noahlogs.tistory.com",
	getPost() { 
		console.log("ES6 문법 정리"); 
	}
};

// 기존 할당 방식
let owner = blog.owner
let getPost = blog.getPost()

// 비구조 할당 방식
let { owner, getPost } = blog;       
// 각각 blog 객체의 owner , getPost() 의 데이터가 할당
// blog의 키 값과 이름이 같아야 해요!
// (예 - owner가 아니라 owner2를 넣어보세요! 아무것도 안 들어온답니다.)
```

**앞으로 리액트 네이티브 앱을 만들며 가장 많이 사용할 방식**

```jsx
// 함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
let blogFunction = ({owner,url,getPost}) => {
	console.log(owner)
	console.log(url)
	console.log(getPost())
}

blogFunction(blog)
```

## 3. 리터럴 - 자바스크립트 안에서 줄바꿈을 자유롭게!

최신 방식에서는 키보드에서 느낌표 옆에 있는 키인 백틱 ( \` ) 을 이용하여 문자열을 + 기호 없이 간단히 처리할 수 있습니다.<br/>
또한 백틱 ( \` ) 안에서는 여러 줄의 줄바꿈도 자유롭게 사용 가능합니다.

```js
const id = "myId" ;
const url = `http://oneonlee.tistory.com/login/${id}` ;

const message = "줄바꿈을 하려면 \n 이 기호를 써야 했죠!"

const message = ` 줄바꿈도 마음대로
사용이 가능합니다. ` 
```

## 4. 객체 리터럴 - 딕셔너리를 짧게 만들어보기!

- 기존에는 객체(딕셔너리)를 생성할 때, 필드명과 대입할 변수명이 같은 상황에서 다음과 같이 코드를 작성하였습니다.

```jsx
// [기존 방식]

var name = "이동건";
var job = "developer";

var user = {
  name: name,
  job: job
}

console.log(user);
// {name: "이동건", job: "developer"}
```

- 최신 방식으로는 다음과 같이 간결하게 작성할 수 있습니다.

```jsx
// [최신 방식]

var name = "이동건";
var job = "developer";

var user = {
  name,
  job
}

console.log(user);
// {name: "이동건", job: "developer"}
```

- `key: value` 형태에서 단순히 변수명만 작성해주면 변수명과 동일한 필드가 생성되며, 그 변수값이 대입됩니다.

## 5. map - 반복문의 또 다른 방식
- 리스트(배열)를 순회하여 값을 꺼내 확인할 땐 다음과 같이 for 반복문을 사용했습니다.
- 이를 위해 리스트의 길이 값을 알아야 했습니다. 

```js
let numbers = [1,2,3,4,5,6,7];
for(let i=0; i<numbers.length; i++){
	console.log(numbers[i]);
}
```

- map은 리스트의 길이값을 몰라도 되며, for와는 반대로 리스트안에서 몇 번째에 있는 값인지 순서를 알려줍니다.

```jsx
let numbers = [1,2,3,4,5,6,7];

numbers.map((value,i) => { 
	console.log(value,i) 
})

// 아래와 같다는 점! 눈치 채셨나요?

numbers.map(function(value,i) {
    console.log(value,i)
})

//1 0
//2 1
//3 2
//4 3
//5 4
//6 5
//7 6
```


## 6. module system - 자바스크립트 파일을 모듈화

앞으로 우린 특정한 파일에서 정의한 값, 함수 또는 딕셔너리를 다른 자바스크립트 파일에서 불러 사용할 일이 많아집니다. 이때 사용하는 개념이 모듈 시스템입니다.

해당 개념은 여기선 의미만 파악하고, 실제 연습은 2주차 때 앱을 만들면서 많이 연습하게됩니다!

**export**는 자바스크립트의 값, 함수, 딕셔너리(객체) 또는 자바스크립트 파일 자체를 외부로 내보내는 키워드이고, 

**import**는 반대로 자바스크립트 파일 안으로 가져오는 키워드 입니다.

외부로 내보낸다는 건 밖에서 쓸 수 있게 준비한다는 의미이고, 내부로 가져온다는 것은 외부로 내보낸 것들을 가져온다는 의미입니다.

예컨대 `util.js` 파일이 있다고 가정해보겠습니다.

```jsx
// times, plusTwo 함수를 외부로 내보낼 준비를 합니다.
export function times(x) {
  return x * x;
}
export function plusTwo(number) {
  return number + 2;
}
```

해당 파일에 위와 같이 함수앞에 `export` 키워드를 단 함수 두 개를 선언 했습니다. 이 두 함수는 같은 폴더 라인에 위치한 파일에서 이렇게 가져와서 사용할 수 있습니다. 

다음은 외부의 `index.js` 파일에서 `util.js`에서 내보낸 함수들을 사용하는 모습입니다.

```jsx
import { times, plusTwo } from './util.js';
console.log(times(2));
console.log(plusTwo(3));
```

이번엔, `util.js` 파일에 `export default` 키워드를 앞에 둔 하나의 함수가 있다고 가정해보겠습니다. 그리고 코드의 하단 부처럼, 작성된 함수 이름은 times지만 가지고 올 때는 k로 가져왔습니다. 

```jsx
// in util.js
export default function times(x) {
  return x * x;
}
// in app.js
import k from './util.js';
console.log(k(4)); // returns 16
```

이렇게 `export default`로 선언한 함수는 해당 파일에서 유일해야 하며, 가져올 땐 이름을 달리해서 가져와서 사용할 수 있습니다.
