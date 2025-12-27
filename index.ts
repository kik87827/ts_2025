let member: (number | string | boolean) = 123;

member = 'test';

let members :(string|number)[] = [1, "2", 3];

let obj: { a: string | number } = { a: '123' }

let name1: unknown;
name1 = 123;
name1 = {}

let age: string | number;

/* any타입 ==> 타입실드해제문법 */