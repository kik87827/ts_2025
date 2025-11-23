let user2 :string = 'kim';
let age4 :undefined = undefined;
let married2 :boolean = false; 
let 철수2 :(string | undefined | boolean)[] = [user2, age4, married2];


let 학교3 :{
    score : (number | boolean)[],
    teacher : string,
    friend : string | string[]
} = {
    score : [100, 97, 84],
    teacher : 'Phil',
    friend : 'John'
}
학교3.score[4] = false;
학교3.friend = ['Lee' , 학교3.teacher]