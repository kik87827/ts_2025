/*

(숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
그건 여러분들이 한번 테스트해보길 바랍니다.

*/
/*
type aliasVar01 = { a: string , b: number }
type aliasVar02 = { b: number, c: number }

type NewAlias = aliasVar01 & aliasVar02;

const testalias :NewAlias = { a: '1', b: 2, c:3}

 */
var makeVar = { size: 5, position: [1, 2, 34] };
var men1 = { name: 'kim', email: 'abc@naver.com' };
