
function calculate(pNumber) {
    let result = true;

    if(pNumber <= 2){
        console.log("Lutfen 2'den buyuk bir sayi giriniz!");
    }
    else{
        for(let i = 2; i < pNumber; i++){
            if(pNumber%i == 0){
                result = false;
                break;
            }
        }

        if(result) {
            console.log(`${pNumber} asal sayidir`)
        } else{
            console.log(`${pNumber} asal sayi degildir`)
        }
    }
}

calculate(19);