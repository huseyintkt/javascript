function fibonacci(pNumber){
    let number1 = 0;
    let number2 = 1;
    let total;
    let fibonacciArray = [0,1];

    for(let i = 0; i < pNumber; i++){
        total = number1 + number2;
        number1 = number2;
        number2 = total;
        fibonacciArray.push(total);
    } 

    return console.log(fibonacciArray);
}

fibonacci(12);