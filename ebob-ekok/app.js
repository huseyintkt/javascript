
function ebobEkok(number1, number2){
    let ebob;
    let ekok;
    let smallNumber = (number1 < number2) ? number1 : number2;
    
    for(let i = smallNumber; i > 0; i--){
        if((number1%i == 0) && (number2%i == 0)){
            ebob = i;
            break;
        }
    }

    ekok = (number1 * number2) /ebob;

    console.log("Ebob : " + ebob + " Ekok : " + ekok);
}

ebobEkok(128, 202);