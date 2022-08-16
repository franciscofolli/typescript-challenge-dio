// any value can be assigned to this variable
let anyValue: any;

anyValue = 1; // number
anyValue = 'palavra' // string
anyValue = true // boolean

let stringValue: string = 'teste';

// stringValue = 3 - doesn't work because is string type
stringValue = anyValue; // typescript darkside - can be a string type value, breaking code typing

let stringValue2: string = 'BIIIIG TEST';

function stringSum(s1: string, s2: string){
    console.log(s1 + s2);
}

stringSum(stringValue, stringValue2);
stringSum('hello, ', 'not world?');