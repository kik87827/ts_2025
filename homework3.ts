/* 

(숙제1) 숫자여러개를 array 자료에 저장해놨는데
가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
이걸 클리닝해주는 함수가 필요합니다. 
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
모르는 부분은 구글검색해도 봐드림 

*/

function cleanNumber(para: (string | number)[]) {
    /* let paraclean = para.map((item) => Number(item)); */
    let paraclean: number[] = [];
    
    para.forEach((item) => {
      if (typeof item === "string") {
        paraclean.push(parseFloat(item));
      } else {
        paraclean.push(item);
      }
    });

    console.log(paraclean);

    return paraclean;
}

/* console.log(cleanNumber([1, 2, '3'])); */


/* 

(숙제2) 다음과 같은 함수를 만들어보십시오.
*/

let 철수쌤 = { subject: "math" };
let 영희쌤 = { subject: ["science", "english"] };
let 민수쌤 = { subject: ["science", "art", "korean"] };

type ObjTeacher = { subject : string | string[]}
function sortingFunc({ subject }: ObjTeacher): string {
  if (typeof subject === "string") {
    return subject;
  } else if (Array.isArray(subject)) {
    return subject[subject.length - 1];
  } else {
    return '없음'
  }
}

console.log(sortingFunc(민수쌤));