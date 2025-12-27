/* function myFunc(x: number | string) {
    if (typeof x === "number") {
        return x + 1;
    }
}

myFunc(123); */

function myFunc2(x : number | string) {
    let array: number[] = [];
    /* if (typeof x === "number") {
        array[0] = x;
    } */
    array[0] = x as number;
}


myFunc2(123);