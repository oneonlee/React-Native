@ 가 있고 없고만 두고서 정확히 이메일을 확인할 수 없습니다. @만 있고 뒤에 도메인이 없을 수도 있으니까요! 이런 여러 경우의 수를 어떻게 하면 전부 고려하며 체크할 수 있을까요?

정규 표현식을 이용하면 쉽게 여러 변수를 고려하며 체크할 수 있습니다.

정규 표현식은 문자열에 나타는 특정 문자 조합과 대응시키기 위해 사용되는 패턴입니다. 자바스크립트에서, 정규 표현식 또한 객체입니다.

이 패턴들은 RegExp의 exec 메소드와 test 메소드  ,그리고 String의  match메소드 , replace메소드 , search메소드 ,  split 메소드와 함께 쓰입니다 .

정규 표현식이란 것을 먼저 구글에 검색해보고, 이메일 정규 표현식을 찾아보세요! 앞으로 우린 이렇게 구글에 검색을 많이 해보면서 답을 찾아 나갑니다.

```jsx
function checkEmail(email){
    //이메일 정규식
    var emailRule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    if(!emailRule.test(email)){
        console.log("이메일이 아닙니다");
    }else{
        console.log("이메일이 맞습니다");
    }

}
```

위 정규 표현식은 @ 가 이메일에 있는지 없는지를 판별하면서 동시에 @ 기준으로 앞뒤에 특수문자가 들어가면( ex) gunhee2#1@gmail) 이메일이 아님을 알려주는 간단 정규표현식입니다.

oneonlee@gmail  처럼 도메인 뒤에 .com 이 없는 경우를 판별하려면 또 다른 정규표현식을 찾아 적용해야합니다.

```jsx

//도메인에 .com이 없는 경우까지 판별
function email_check( email ) {    
    var regex=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    return (email != '' && email != 'undefined' && regex.test(email)); 
}

console.log(email_check('oneonlee21@gmail'))
```
