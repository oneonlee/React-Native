# 1. Javascript 맛보기
## 1) 자바스크립트란?
### 01. 자바스크립트에 대하여

보통 **자바스크립트**는 웹 사이트(웹 문서)에 움직이는 그림을 그릴 때 쓰이는 작고 가벼운 언어입니다. 
- 자바스크립트를 이용해 사이트 내의 팝업을 띄울 수 있으며
<img width="461" alt="스크린샷 2021-06-19 오전 1 32 03" src="https://user-images.githubusercontent.com/73745836/122591766-656d3c80-d09e-11eb-8a81-049d0fe8665c.png">

- 마감까지 얼마 남았는지 카운팅이 되는 모습도 작성할 수 있습니다.
<img width="461" alt="스크린샷 2021-06-19 오전 1 35 35" src="https://user-images.githubusercontent.com/73745836/122591968-a6fde780-d09e-11eb-8b7d-4e88ce6bd4e1.png">

그렇기 때문에 항상 자바스크립트 == 웹 기술! 이라는 고정관념이 생겼는데요!<br/>
이제 더 이상 자바스크립트는 옛날의 자바스크립트가 아닙니다.

### 02. 자바스크립트로 어떤 것들을 할 수 있을까?
이제는 자바스크립트로 앱도 만들 수 있습니다. (우리가 배울 리액트 네이티브가 자바스크립트를 기반으로 하기 때문이죠!!)

따라서 자바스크립트를 배워 놓으면 웹도 만들고 앱도 만들 수 있습니다.

그럼 이제 본격적으로 자바스크립트 문법을 연습해보도록 하겠습니다!

![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F992fb737-21f9-43dd-b0c6-e9c760d46ec1%2FUntitled.png?table=block&id=ce2ce09f-b77c-4101-9613-6ca45fa566f7&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2110&userId=&cache=v2)

## 2) 자바스크립트 공부 준비!
자바스크립트 공부 할 땐! 우리에겐 크롬 브라우저만 있으면 충분합니다.

크롬 브라우저를 실행한 다음

- 윈도우는 : F12
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F1e6958f1-5ed1-42b8-9ad0-5fe2a11f6070%2FUntitled.png?table=block&id=3e69030f-b8d2-4cba-b2d2-271003f10c94&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2020&userId=&cache=v2)
- 맥은 : alt(option) + command + i 를 눌러서 개발자 콘솔을 열어주세요!
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F369588fa-3c4e-4423-a2d9-c0f360c2d326%2FUntitled.png?table=block&id=7653a228-3cf2-4e69-b03b-83abf55874fa&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=2020&userId=&cache=v2)

이번 시간에 우리는 이 콘솔 창에 코드를 작성하며 공부를 진행해볼게요! 🙂

console.log(변수) 는 콘솔 창에 괄호 안의 값을 출력해줍니다.
개발자가 결과값을 보기 편하도록!

console.log(변수1,변수2) 로 여러 변수를 한번에 출력할 수도 있어요.
아래를 복사해서 콘솔 창에 붙여 넣어보세요.

```jsx
console.log("Hello World!");
```

# 2. JavaScript 기초 문법
- [미리 궁금해 하실 부분]

```jsx
//여러분들이 코딩을 시작하기 전에, 미리 궁금해 하실 것들을 준비해봤습니다!

1) 코드를 마칠 때, 코드 마지막에;를 써도되고 안써도 됩니다!
  let num = 1;
  let num = 1

2) 변수를 선언할 때 let을 써야 하야 var를 써야 하는가? 
   둘 다 무엇을 써도 똑같은 기능을 하지만 우리가 같이 공부할 땐 let을 쓰도록 합시다!

3) 딕셔너리랑 객체라는 단어를 혼용해서 쓰던데 뭐가 맞는것이냐? 둘다 똑같습니다! 우린 딕셔너리 라는
   이름으로 배울 거지만, 혹시 제가 객체라는 말이 툭 튀어 나와도 이해부탁드립니다 (_ _)

4) 마찬가지로 배열과 리스타라는 어휘도 똑같은 개념이라고 보시면 됩니다!

```

## 1) 변수
- 변수 대입( a = 2 )의 의미: "오른쪽에 있는 것을 왼쪽에 넣는 것!"
  - (2를 a라는 변수에 넣는다)
- **let**으로 변수를 선언합니다.

  ```jsx
  let num = 20
  num = 'Bob'

  // 변수는 값을 저장하는 박스예요.
  // 한 번 선언했으면, 다시 선언하지 않고 값을 넣습니다.
  ```

- 사칙연산 그리고 문자열 더하기가 기본적으로 가능합니다.

  ```jsx
  let a = 1
  let b = 2

  a+b // 3
  a/b // 0.5

  let first = 'Bob'
  let last = 'Lee'

  first+last // 'BobLee'

  first+' '+last // 'Bob Lee'

  first+a // Bob1 -> 문자+숫자를 하면, 숫자를 문자로 바꾼 뒤 수행합니다.
  ```

- 변수명은 아무렇게나?

  ```jsx
  let first_name = 'bob' // snake case라고 합니다.

  또는,

  let firstName = 'bob' // camel case라고 합니다. 회사마다 규칙이 있죠.

  과 같이, 쉽게 알아볼 수 있게 쓰는 게 중요합니다.
  다른 특수문자 또는 띄워쓰기는 불가능합니다!
  ```

- **const**로 변수 선언

  ```jsx
  let value_box = '값'
  value_box = '변경한 값';

  console.log(value_box) // 콘솔엔 '변경한 값'이 찍힙니다.

  const value_fix = '값';
  value_fix = '변경한 값';

  console.log(value_fix) // const로 선언한 변수엔 새로운 값을 재 할당(다시 입력!) 할 수 없습니다.
  ```

  - const로 변수 선언을 한 후, 값은 변경한다면?
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F365d93a4-cbda-4abb-9d92-ecdd1ad95945%2FUntitled.png?table=block&id=ea3485d8-407a-44e4-9bf8-b6e7b0b19549&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1270&userId=&cache=v2)
  - 코드상에서 쉽게 변하면 안되는 고정 값을 관리할 땐 const로 선언 하면 좋겠죠?

## 2) 리스트(배열) & 딕셔너리(객체)
리스트를 배열(Array)이라고도 부릅니다

- 리스트: 순서를 지켜서 가지고 있는 형태입니다.

  ```jsx
  let a_list = []  // 리스트를 선언. 변수 이름은 역시 아무렇게나 가능!

  // 또는,

  let b_list = [1,2,'hey',3] // 로 선언 가능

  b_list[1] // 2 를 출력
  b_list[2] // 'hey'를 출력

  // 리스트에 요소 넣기
  b_list.push('헤이')
  b_list // [1, 2, "hey", 3, "헤이"] 를 출력

  // 리스트의 길이 구하기
  b_list.length // 5를 출력
  ```

- 딕셔너리: 키(key)-밸류(value) 값의 묶음

  딕셔너리는 객체로도 불립니다

  ```jsx
  let a_dict = {}  // 딕셔너리 선언. 변수 이름은 역시 아무렇게나 가능!

  // 또는,

  let b_dict = {'name':'Bob','age':21} // 로 선언 가능
  b_dict['name'] // 'Bob'을 출력
  b_dict['age'] // 21을 출력

  b_dict['height'] = 180 // 딕셔너리에 키:밸류 넣기
  b_dict // {name: "Bob", age: 21, height: 180}을 출력
  ```

- 리스트와 딕셔너리의 조합

  ```jsx
  names = [{'name':'bob','age':20},{'name':'carry','age':38}]

  // names[0]['name']의 값은? 'bob'
  // names[1]['name']의 값은? 'carry'

  new_name = {'name':'john','age':7}
  names.push(new_name)

  // names의 값은? [{'name':'bob','age':20},{'name':'carry','age':38},{'name':'john','age':7}]
  // names[2]['name']의 값은? 'john'
  ```

- 딕셔너리의 자주쓰는 또 다른 표현

  ```jsx
  let b_dict = {'name':'Bob','age':21}

  //bob 이름을 꺼낼땐 두 가지 방식으로 깞을 꺼낼 수 있습니다.
  b_dict['name']
  b_dict.name

  둘다 똑같이 딕셔너리의 키값에 접근하여 값을 꺼내옵니다.
  ```

- 왜 필요할까요?

  - **순서를 표시할 수 있고, 정보를 묶을 수 있습니다.**

  - 앞에서 언급한 <스파르타과일가게>가 정말 잘 되어서 전국에서 손님이 찾아오고 있습니다. 대기표를 작성하기 위해서 온 순서대로 이름,  휴대폰 번호를 적도록 하였는데요. 변수만을 사용한 모습은 다음과 같습니다.

  ```jsx
  let customer_1_name = '김스파';
  let customer_1_phone = '010-1234-1234';
  let customer_2_name = '박르탄';
  let customer_2_phone = '010-4321-4321';
  ...(알아보기 힘듭니다.)
  ```

 - 딕셔너리를 활용한다면 다음과 같이 고객 별로 정보를 묶을 수 있습니다.
 
 ```jsx
  let customer_1 = {'name': '김스파', 'phone': '010-1234-1234'};
  let customer_2 = {'name': '박르탄', 'phone': '010-4321-4321'};
  ```
  
 - 그리고 순서를 나타내기 위해 리스트를 사용하면, 이렇게나 깔끔해집니다.
  ```jsx
  let customer = [
    {'name': '김스파', 'phone': '010-1234-1234'},
    {'name': '박르탄', 'phone': '010-4321-4321'}
  ]
  ```
  
  - 보기에도 깔끔해지고, 다루기도 쉬워지고, 고객이 새로 한 명 더 오더라도 .push 함수를 이용해 간단하게 대응할 수 있습니다.

- JSON 데이터 구조
  - 리스트와 딕셔너리가 복합적으로 존재하는 데이터 구조가 JSON 데이터 구조입니다
  - 다음은 [서울시 미세먼지 값](http://openapi.seoul.go.kr:8088/6d4d776b466c656533356a4b4b5872/json/RealtimeCityAir/1/99)Open API JSON 데이터 구조입니다.
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe3a030da-4aa7-4b3b-9afb-29d014d7f0e3%2FUntitled.png?table=block&id=eb6a903e-6675-4c66-b77d-294b11726c50&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1310&userId=&cache=v2)
  - 큰 딕셔너리 값 안에 딕셔너리 또는 리스트가 얽혀있는 모습입니다.
  - 크롬 익스텐션 [JSONView](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=ko)를 설치해볼까요? 그럼 좀 더 예쁘게 JSON을 볼 수 있습니다.

  - 위 예제에서는 RealtimeCityAir라는 키 값에 딕셔너리 형 value가 들어가있고, 그 안에 row라는 키 값에는 리스트형 value가 들어가있습니다.
  - ![](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F8f29b7c4-6b71-4b7f-9013-a8afb772dd1a%2FUntitled.png?table=block&id=74c1c1e8-d0e9-4606-b213-0be5a34a4f2f&spaceId=83c75a39-3aba-4ba4-a792-7aefe4b07895&width=1150&userId=&cache=v2)

## 3) 자바스크립트 기본 제공 함수
- 사칙연산 외에도, 기본적으로 제공하는 여러 함수들이 존재합니다.
  - 왠지 이건 있을 것 같은데? (예 - 특정 문자를 바꾸고 싶다 등) 싶으면 직접 만들지 말고 **구글에 먼저 찾아보세요!**

    ```jsx
    **예를 들면, 나눗셈의 나머지를 구하고 싶은 경우**

    let a = 20
    let b = 7

    a % b = 6
    ```

    ```jsx
    **또, 모든 알파벳을 대문자로 바꾸고 싶은 경우**

    let myname = 'spartacodingclub'

    myname.toUpperCase() // SPARTACODINGCLUB
    ```

    ```jsx
    **또, 특정 문자로 문자열을 나누고 싶은 경우 1**

    let myemail = 'sparta@gmail.com'

    let result = myemail.split('@') // ['sparta','gmail.com']

    result[0] // sparta
    result[1] // gmail.com

    let result2 = result[1].split('.') // ['gmail','com']

    result2[0] // gmail -> 우리가 알고 싶었던 것!
    result2[1] // com

    myemail.split('@')[1].split('.')[0] // gmail -> 간단하게 쓸 수도 있다!
    ```

    ```jsx
    **특정 문자로 나누고 싶은 경우 2**

    let txt = '서울시-마포구-망원동'

    ****let names = txt.split('-'); // ['서울시','마포구','망원동'
    ```

    ```jsx
    **특정 문자로 합치고 싶은 경우**

    let result = names.join('>'); // '서울시>마포구>망원동' (즉, 문자열 바꾸기!)
    ```

## 4) 함수
- 함수로 던진 값은 함수 안에 담긴 로직에 의해 값이 바뀌어서 나오곤 했죠? 자바스크립트의 함수에서도 똑같습니다.
- 기본 생김새

  ```jsx
  // 만들기
  function 함수이름(필요한 변수들) {
    내릴 명령들을 순차적으로 작성
  }
  // 사용하기
  함수이름(필요한 변수들);
  ```

- 예시

  ```jsx
  // 두 숫자를 입력받으면 더한 결과를 돌려주는 함수
  function sum(num1, num2) {
    console.log('num1: ', num1, ', num2: ', num2);

    //return 으로 값을 돌려주는, 뱉는 구조로 변수에 값을 전달 할 수도 있습니다.
    return num1 + num2;
  }

  sum(3, 5); // 8
  sum(4, -1); // 3
  let result = sum(10,10)
  console.log(result) // 20
  ```

- 또다른 함수 선언 방식

  ```jsx
  let a = function(){
    console.log("리터럴 방식 이라고 합니다");
  }

  a()
  ```
  
## 5) 조건문
- 90보다 작으면 작다고, 크면 크다고 알려주는 함수

    ```jsx
    function is_adult(age){
    	if(age > 20){
    		alert('성인이에요')
    	} else {
    		alert('청소년이에요')
    	}
    }

    is_adult(25)
    ```

- if, else if, else if, else if else

    ```jsx
    function is_adult(age){
    	if(age > 20){
    		alert('성인이에요')
    	} else if (age > 10) {
    		alert('청소년이에요')
    	} else {
    		alert('10살 이하!')
    	}
    }

    is_adult(12)
    ```

- AND 조건과 OR 조건!

    ```jsx
    // AND 조건은 이렇게
    function is_adult(age, sex){
      if(age > 20 && sex == '여'){
        alert('성인 여성')
      } else if (age > 20 && sex == '남') {
        alert('성인 남성')
      } else {
        alert('청소년이에요')
      }
    }

    // 참고: OR 조건은 이렇게
    function is_adult(age, sex){
      if (age > 65 || age < 10) {
        alert('탑승하실 수 없습니다')
      } else if(age > 20 && sex == '여'){
        alert('성인 여성')
      } else if (age > 20 && sex == '남') {
        alert('성인 남성')
      } else {
        alert('청소년이에요')
      }
    }

    is_adult(25,'남')
    ```
    
 ## 6. 반복문
 - 예를 들어 0부터 99까지 출력해야 하는 상황이라면!

    ```jsx
    console.log(0)
    console.log(1)
    console.log(2)
    console.log(3)
    console.log(4)
    console.log(5)
    ...
    console.log(99)

    // 이렇게 쓰기엔 무리가 있겠죠? 그래서, 반복문이라는 것이 존재합니다!
    ```

- 반복문을 이용하면 아래와 같이 단 세줄로, 출력할 수 있습니다.

    ```jsx
    for (let i = 0; i < 100; i++) {
    	console.log(i);
    }
    ```

    ```jsx
    for (1. 시작조건; 2. 반복조건; 3. 더하기) {
    	4. 매번실행
    }

    1 -> 2체크하고 -> (괜찮으면) -> 4 -> 3
    -> 2체크하고 -> (괜찮으면) -> 4 -> 3
    -> 2체크하고 -> (괜찮으면) -> 4 -> 3
    -> 2체크하고 -> (괜찮으면) -> 4 -> 3

    와 같은 순서로 실행됩니다.
    i가 증가하다가 반복조건에 맞지 않으면, 반복을 종료하고 빠져나옵니다.
    ```

- 그러나 위처럼 숫자를 출력하는 경우보다는, 반복문은 주로 리스트와 함께 쓰입니다.

아래 예시를 볼까요? 일단 아래를 복사 붙여넣기 하고, 함께 코딩해볼게요

    ```jsx
    let people = ['철수','영희','민수','형준','기남','동희']

    // 이렇게 하면 리스트의 모든 원소를 한번에 출력할 수 있겠죠?
    // i가 1씩 증가하면서, people의 원소를 차례대로 불러올 수 있게 됩니다.
    for (let i = 0 ; i < people.length ; i++) {
    	console.log(people[i])
    }
    ```

- 리스트도 그냥 리스트가 아닙니다! 딕셔너리가 들어간 리스트와 찰떡이죠

    ```jsx
    let scores = [
      {'name':'철수', 'score':90},
      {'name':'영희', 'score':85},
      {'name':'민수', 'score':70},
      {'name':'형준', 'score':50},
      {'name':'기남', 'score':68},
      {'name':'동희', 'score':30},
    ]

    for (let i = 0 ; i < scores.length ; i++) {
      console.log(scores[i]);
    }

    // 이렇게 하면 리스트 내의 딕셔너리를 하나씩 출력할 수 있고,
    ```

    ```jsx
    for (let i = 0 ; i < scores.length ; i++) {
    	if (scores[i]['score'] < 70) {
    		console.log(scores[i]['name']);
    	}
    }

    // 이렇게 하면 점수가 70점 미만인 사람들의 이름만 출력할 수도 있습니다.
    ```

## 7. 합을 구하는 함수 만들기
0부터 n-1까지 더하는 함수를 만들고 싶다면?

  ```jsx
  function get_sum(n) {
      let sum = 0
      for (let i = 0; i < n; i++) {
          sum += i;         // sum을 i만큼 증가시켜라. sum = sum + i 와 동일!
      }
      return sum
  }

  let result = get_sum(10); // return 결과인 sum이 result에 저장
  console.log(result)       // 45를 출력
  ```
 
## 8. 배열에서 특정 원소 개수 구하기
다음에서 '딸기'는 몇 개일까? - 이번엔 자바스크립트 콘솔창에서!
  
  - 과일 리스트

    ```jsx
    let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
    ```

```jsx
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
	let fruit = fruit_list[i];
	if (fruit == '딸기') {
		count += 1;
	}
}
console.log(count);
```

## 9. 미세먼지 지수가 40보다 작은 구 찾기!
- 서울시 미세먼지 값

    ```jsx
    let mise_list = [
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "중구",
        PM10: 22,
        PM25: 14,
        O3: 0.018,
        NO2: 0.015,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 31,
        ARPLT_MAIN: "O3",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "종로구",
        PM10: 24,
        PM25: 18,
        O3: 0.013,
        NO2: 0.016,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM25",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "용산구",
        PM10: 0,
        PM25: 15,
        O3: 0.012,
        NO2: 0.027,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "점검중",
        IDEX_MVL: -99,
        ARPLT_MAIN: "점검중",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "은평구",
        PM10: 36,
        PM25: 14,
        O3: 0.019,
        NO2: 0.018,
        CO: 0.5,
        SO2: 0.005,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "서대문구",
        PM10: 28,
        PM25: 9,
        O3: 0.018,
        NO2: 0.015,
        CO: 0.6,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "마포구",
        PM10: 26,
        PM25: 8,
        O3: 0.012,
        NO2: 0.021,
        CO: 0.5,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 36,
        ARPLT_MAIN: "NO2",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "광진구",
        PM10: 17,
        PM25: 9,
        O3: 0.018,
        NO2: 0.016,
        CO: 0.6,
        SO2: 0.001,
        IDEX_NM: "좋음",
        IDEX_MVL: 31,
        ARPLT_MAIN: "O3",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "성동구",
        PM10: 21,
        PM25: 12,
        O3: 0.018,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 33,
        ARPLT_MAIN: "PM25",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "중랑구",
        PM10: 27,
        PM25: 10,
        O3: 0.015,
        NO2: 0.019,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 34,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "동대문구",
        PM10: 26,
        PM25: 9,
        O3: 0.016,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 34,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "성북구",
        PM10: 27,
        PM25: 8,
        O3: 0.022,
        NO2: 0.014,
        CO: 0.5,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "도봉구",
        PM10: 25,
        PM25: 12,
        O3: 0.024,
        NO2: 0.011,
        CO: 0.3,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "O3",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "강북구",
        PM10: 30,
        PM25: 15,
        O3: 0.022,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "노원구",
        PM10: 21,
        PM25: 14,
        O3: 0.017,
        NO2: 0.016,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 36,
        ARPLT_MAIN: "PM25",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "강서구",
        PM10: 36,
        PM25: 16,
        O3: 0.021,
        NO2: 0.013,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "구로구",
        PM10: 23,
        PM25: 10,
        O3: 0.022,
        NO2: 0.016,
        CO: 0.3,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "O3",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "영등포구",
        PM10: 29,
        PM25: 15,
        O3: 0.01,
        NO2: 0.022,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "동작구",
        PM10: 29,
        PM25: 15,
        O3: 0.012,
        NO2: 0.023,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "관악구",
        PM10: 27,
        PM25: 12,
        O3: 0.012,
        NO2: 0.022,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "NO2",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "금천구",
        PM10: 25,
        PM25: 15,
        O3: 0.015,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 43,
        ARPLT_MAIN: "PM25",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "양천구",
        PM10: 0,
        PM25: 14,
        O3: 0.016,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "점검중",
        IDEX_MVL: -99,
        ARPLT_MAIN: "점검중",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "강남구",
        PM10: 31,
        PM25: 16,
        O3: 0.018,
        NO2: 0.018,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "서초구",
        PM10: 34,
        PM25: 13,
        O3: 0.024,
        NO2: 0.019,
        CO: 0.3,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "송파구",
        PM10: 25,
        PM25: 6,
        O3: 0.014,
        NO2: 0.025,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "NO2",
      },
      {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "강동구",
        PM10: 24,
        PM25: 14,
        O3: 0.016,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM25",
      },
    ];
    ```

```jsx
for (let i = 0; i < mise_list.length; i++) {
  let mise = mise_list[i];
  if (mise["IDEX_MVL"] < 40) {
    let gu_name = mise["MSRSTE_NM"];
    let gu_mise = mise["IDEX_MVL"];
    console.log("40보다 작은 구: " + gu_name + ", " + gu_mise);
  }
}
```

# 참고자료 : [[스파르타코딩클럽] 앱개발 종합반 - 1주차](https://www.notion.so/1-4a5c6ffbbdac43bb8e91850dfa02215e)
