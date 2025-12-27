function func(x :number) :number {
  return x * 2;
}
function func2(x? :number) :void {
  
}
function func3(x: number | undefined) {
    
}
function func4(x: number | string): void {
    if (typeof x === "number") {
        console.log(x + 3);
    }
}

func(2);
func2();
func3(1);
