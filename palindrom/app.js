
/**
 * Palindrom, tersten okunuşu da aynı olan cümle, sözcük ve sayılara denilmektedir.
 */
function isPalindrom(pWord){
    let word = pWord;
    let reverseWord = "";

    for(let i = word.length-1; i >= 0; i--){
        reverseWord = reverseWord + word.charAt(i);
    }

    if(reverseWord === word){
        console.log(`"${word}" palindrom bir kelimedir!`)
    } else{
        console.log(`"${word}" palindrom bir kelime değildir!`)
    }
}

isPalindrom("kucuk");

isPalindrom("buyuk");