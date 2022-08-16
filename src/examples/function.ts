function numbersValuesPrint(n1: number, n2: number): void { // se declarar void o sistema impede de inserir um retorno indesejado/ por engano
    console.log(n1 + n2);
}

function typingAndSumValues(n1: number, 
                                n2: number,
                                callback: (n1: number) => number
                                ): number { // tipo de retorno
    let response =  n1 + n2;
    return callback(response);
}

function squared(n: number): number {
    return n * n;
}

function divideForHimself(n: number): number {
    return n / n;
}

numbersValuesPrint(1, 43);

console.log(typingAndSumValues( 1, 3, squared ))
console.log(typingAndSumValues( 1, 3, divideForHimself ))