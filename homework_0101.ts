

/* 

(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 

*/

type CurZero2 = (para :string) => string;

let cutZero2 :CurZero2 = (para) => {
    return para.replace(/^0+/,"");
}

type RemoveDash2 = (para :string) => number;

let removeDash2 :RemoveDash2 = (para) => {
    return parseFloat(para.replace(/-/g,""));
}
/* 
console.log(cutZero2('011334'));
console.log(removeDash2('12-2-3-4')); */




/* 

(숙제3) 함수에 함수를 집어넣고 싶습니다.

숙제2에서 만든 함수들을 파라미터로 넣을 수 있는 함수를 제작하고 싶은 것입니다. 
이 함수는 파라미터 3개가 들어가는데 첫째는 문자, 둘째는 함수, 셋째는 함수를 집어넣을 수 있습니다. 이 함수를 실행하면

1. 첫째 파라미터를 둘째 파라미터 (함수)에 파라미터로 집어넣어줍니다.
2. 둘째 파라미터 (함수)에서 return된 결과를 셋째 파라미터(함수)에 집어넣어줍니다.
3. 셋째 파라미터 (함수)에서 return된 결과를 콘솔창에 출력해줍니다. 

이 함수는 어떻게 만들면 될까요?

둘째 파라미터엔 cutZero, 셋째 파라미터엔 removeDash 라는 함수들만 입력할 수 있게 파라미터의 타입도 지정해봅시다.

 (실행예시)
만들함수('010-1111-2222', cutZero, removeDash)
이렇게 사용하면 문자에 1. cutZero를 해주고, 2. removeDash를 해주고 그 결과를 콘솔창에 1011112222 이렇게 출력해줍니다. 
이런거 처음이면 어려울 수 있으니 하루 드림 
*/

type Para2 = (a :string) => string;
type Para3 = (a :string) => number;

let mergeFunc = (para1, para2 :Para2, para3 :Para3) =>{
    let result = para2(para1);
    let result2 = para3(result);
    console.log(result2);
};

mergeFunc('010-1111-2222', cutZero2, removeDash2);
