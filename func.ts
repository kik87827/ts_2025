type MyFunc2 = (para :string) => number

const myfunc2 :MyFunc2 = ()=> {
    return 2;
}


type MyObj2 = {
    name : string,
    age : number,
    plusOne : (para :number) => number,
    changeName : () => void
}

let myObj2 :MyObj2  = {
    name : 'kik',
    age : 30,
    plusOne(a){
       return a + 1;     
    },
    changeName : () => {}
}

myObj2.plusOne(2);

