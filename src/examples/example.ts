// using typescript typing the variables and havin't any errors on compilation
// using script tsc --watch compiles a js to run this on navigators
let button = document.getElementById('button');
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;

function addNumbers(n1: number, n2: number, frase: string) {
    let result = n1 + n2;
    if(mustPrint){
        console.log(frase + result);
    }
    return result;
}

let mustPrint = true;
let frase: string = 'The value is: '

if(button){
    button.addEventListener('click', () => {
        console.log(addNumbers(Number(input1.value),Number(input2.value), frase));
    });
}