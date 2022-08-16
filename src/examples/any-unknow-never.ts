let anyIsBack: any;
anyIsBack = 3;
anyIsBack = '3';
anyIsBack = true;
anyIsBack = 5;

let stringTest: string = 'verify'

let unknowValue: unknown;
unknowValue = 3;
unknowValue = 'ok';
unknowValue = true;
unknowValue = 'will goes';

let stringTest2: string = 'now goes!!';

// TODO about code below:
// doesn't works because needs a validation to know if is a string value
// stringTest2 = unknowValor;

// TODO the unknow value forces a validation tratement to do somethings instead any works
if(typeof unknowValue === 'string'){
    stringTest2 = unknowValue; 
}

// Below haves the working of a 'never' function type that is a code that never ends (unless have a thrown an error)
function jogaErro(error: string, code: number): never { 
    throw {error: error, code: code};
}

jogaErro('Error - ', 500)