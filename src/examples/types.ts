// create types of variables, to identify what types a variable can be
type input = number | string

function valuesSum(i1: input, i2: input){
    if(typeof i1 === 'string' || typeof i2 === 'string'){
        return i1.toString() + i2.toString();
    } else {
        return i1 + i2;
    }
}

console.log(valuesSum(1, 5));
console.log(valuesSum('Hello', ', world again?'));
console.log(valuesSum('1', 5));
