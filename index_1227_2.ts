
type FuncType = (a :string) => number;

let myFunc3 :FuncType = function(a){
    return 10;
}

type MemberPlusType = (a :number) => number;
type MemberPlusType2 = () => undefined;


type MemberFunc = {
    name : string,
    plusOne : (x :number) => number,
    changeName : () => void
}

let memberObj :MemberFunc = {
    name : 'kim',
    plusOne(a){
        return a + 1;
    },
    changeName : () => {}
}
