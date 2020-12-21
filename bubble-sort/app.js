
function bubbleSort(myArray){

    let myArrayLength = myArray.length;

    for(let i = 0; i < myArrayLength-1; i++){
        
        for(let j = 0; j < myArrayLength-i-1; j++){

            if(myArray[j] > myArray[j+1]){
                let temp = myArray[j];
                myArray[j] = myArray[j+1];
                myArray[j+1] = temp;
            }

        }
    }

    return myArray;
}

let myArray = [290, 22, 6, 976, 72, 99];

console.log(bubbleSort(myArray));