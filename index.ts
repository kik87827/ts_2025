let menName :string = "kim";
let mensArray :string[] = ['kim','park'];
let menObject :{name? : string} = {name : 'kim'}

let menUni :string | number | string[] = 1234;

type MyType = string | number;
let menVar :MyType = 123;

function myFunc(para :number) :number {
    return para * 2;
}

myFunc(1);

type Member = [number,boolean];
let john :Member = [123,true]

type Member2 = { [key :string] : string};
let john2 :Member2 = { name : 'john', name2 : 'test'}

class User {
    name :string;
    constructor(name :string){
        this.name = name;
    }
}