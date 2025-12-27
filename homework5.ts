/* 

(숙제2) 다음 함수2개를 만들어보고 타입까지 정의해보십시오.

- cutZero()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 맨 앞에 '0' 문자가 있으면 제거하고 문자 type으로 return 해줍니다.
- removeDash()라는 함수를 만듭시다. 이 함수는 문자를 하나 입력하면 대시기호 '-' 가 있으면 전부 제거해주고 그걸 숫자 type으로 return 해줍니다. 
- 함수에 타입지정시 type alias를 꼭 써보도록 합시다. 

물론 문자제거 하는 방법을 모른다면 구글검색이 필요합니다. 

*/

type CurZero = (para :string) => string
let curZero :CurZero = function(para){
    let result = para.replace(/^0+/,"");
    return result;
}
/* 
let curZero :CurZero = (para) => {
    const isStartWithZero = para.charAt(0);
    if(isStartWithZero === "0"){
        return para.slice(1);
    }else{
        return para;
    }
}
*/
console.log(curZero('0test'));


type RemoveDash = (para :string) => number;
/* let removeDash :RemoveDash = (para) => {
    return para.split("-").join("");
} */
let removeDash :RemoveDash = (para)=>{
    let result = para.replace(/-/g,"");
    return parseFloat(result);
}

console.log(removeDash('1-2-3-4-5'))