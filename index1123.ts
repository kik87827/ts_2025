function func(x :number) :number{
    return x * 2;
}

function func2(x? :number) :void {
    
}

func(10);

func2();

function func3(x : number | string) :void {
    if(typeof x === "number"){
        console.log(x + 3);
    }
}