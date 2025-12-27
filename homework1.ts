/* 
(숙제1) 다음 변수 4개에 타입을 지정해봅시다.

let user = 'kim';
let age = undefined;
let married = false; 
let 철수 = [user, age, married];
*/

let user2 :string = "kim";
let age2 :undefined = undefined;
let married2 :boolean = false;
let 철수: (string | undefined | boolean)[] = [user2, age2, married2];


/* 
(숙제2) 학교라는 변수에 타입지정해보십시오.
*/

type school = { 
    score: (number|boolean)[],
    teacher: string,
    friend : string | string[]
 };
let 학교 :school = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];