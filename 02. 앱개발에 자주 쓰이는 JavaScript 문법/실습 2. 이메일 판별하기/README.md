# 실습 2. 이메일 판별하기

플랫폼에서 이메일로 회원가입 하는 일들이 빈번히 일어납니다.<br>
이때 사용자가 입력한 이메일이 제대로 된 이메일인지 어떻게 알아 낼 수 있을까요? <br>
예컨대 oneonlee#gmail.com이라고 썼다면 이메일인지 어떻게 할 수 있을까요?<br>

Q. 

```js
function checkEmail(email){
	...
}

checkEmail('oneonlee@gmail.com') // 이메일이 맞습니다
checkEmail('oneonlee$gmail.com') // 이메일이 아닙니다.
```

Q1. 구글에 "자바스크립트 indexOf"라고 검색 한 다음 indexOf를 이용하여 풀어보세요.

Q2. 구글에 "자바스크립트 이메일 정규표현식"이라고 검색 한 다음 정규 표현식을 이용해서 구현해보세요.
