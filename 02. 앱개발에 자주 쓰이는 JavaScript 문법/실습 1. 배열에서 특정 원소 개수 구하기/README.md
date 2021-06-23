# 실습 1.  배열에서 특정 원소 개수 구하기
## `map` 함수를 사용해서 해결하기

Q. 다음에서 '딸기'는 몇 개일까?

```js
let fruit_list = ['사과','감','감','배','포도','포도','딸기',
'포도','감','수박','딸기']

let count = 0;
for (let i = 0; i < fruit_list.length; i++) {
	let fruit = fruit_list[i];
	if (fruit == '딸기') {
		count += 1;
	}
}
console.log(count);
```

A. 

```jsx
let fruit_list = ['사과','감','감','배','포도','포도','딸기','포도','감','수박','딸기']
let count = 0;
fruit_list.map((f)=>{
    if(f == "딸기") count += 1
})

console.log(count)
```
