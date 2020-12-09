/**
 * 153 = (1*1*1) + (5*5*5) + (3*3*3)  
 * 371 = (3*3*3) + (7*7*7) + (1*1*1) 
 */
let onesDigit, tensDigit, hundredsDigit;
let total;
let armstrongNumbers = [];

for(let i = 100; i <= 999; i++){
    onesDigit = i%10;
    tensDigit = Math.floor(i/10)%10;
    hundredsDigit = Math.floor(i/100)%10;

    total = Math.pow(onesDigit, 3) + Math.pow(tensDigit, 3) + Math.pow(hundredsDigit, 3);

    if(total == i){
        armstrongNumbers.push(i);
    }
}

console.log(armstrongNumbers);