function selectionSort(myArray){

    let myArrayLength = myArray.length;

    for(let i = 0; i < myArrayLength-1; i++){
        
        let minId = i;

        for(let j = i+1; j < myArrayLength; j++){
            if(myArray[j] < myArray[minId]){
                minId = j;
            }
        }

        let temp = myArray[minId];
        myArray[minId] = myArray[i];
        myArray[i] = temp;
    }

    return myArray;
}

let myArray = [290, 22, 6, 976, 72, 99];

console.log(selectionSort(myArray));