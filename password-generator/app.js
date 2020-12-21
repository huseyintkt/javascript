
const NUMBER_OF_PASSWORDS = 50;

/**
 * @param {olusturulacak sifrenin uzunlugu} length
 * 
 * Bu fonksiyon, random sifre olusturur.
 * Sifrenin ilk dort karakterinde random olarak en az bir kucuk harf, buyuk harf, rakam ve sembol bulunmasi icin gerekli kontrolleri yapar.
 * Sifrenin geri kalan kisminda random olarak kucuk harf, buyuk harf, rakam ve sembol yerlestirmeye devam eder.
 */
function generatePassword(length) {
    let password = '';
    let methodsUsed = [];
	for(let i = 0; i < length; i++) {        
        if(i < 4){
            let randomFunction = Math.floor(Math.random() * 4);
            if(methodsUsed.indexOf(randomFunction) === -1){
                methodsUsed.push(randomFunction);
                password = addCharacterToPassword(password, randomFunction);
            } else{
                --i;
            }        
        } else{
            let randomFunction = Math.floor(Math.random() * 4);
            password = addCharacterToPassword(password, randomFunction);  
        }
	}	
    return password;
}

/**
 * @param {sifrenin son guncel hali} pPassword 
 * @param {random olarak kucuk harf, buyuk harf, rakam veya sembol ureten metodlardan birisi} pRandomFunction 
 * 
 * Bu fonksiyon, parametre olarak gonderilen fonksiyona gore sifreye yeni karakter ekler.
 */
function addCharacterToPassword(pPassword, pRandomFunction){
    switch (pRandomFunction) {
        case 0:
            pPassword += getRandomLower();
            break;
        case 1:
            pPassword += getRandomUpper();
            break;
        case 2:
            pPassword += getRandomNumber();
            break;
        case 3:
            pPassword += getRandomSymbol();
            break;
    }
    return pPassword;
}

/**
 * Bu fonksiyon, random olarak bir kucuk harf geriye dondurur.
 */
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

/**
 * Bu fonksiyon, random olarak bir buyuk harf geriye dondurur.
 */
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

/**
 * Bu fonksiyon, random olarak bir rakam geriye dondurur.
 */
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

/**
 * Bu fonksiyon, random olarak bir sembol geriye dondurur.
 */
function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

/**
 * 8 ile 16 karakter uzunlugunda, icerisinde en az bir tane kucuk harf, buyuk harf, rakam ve sembol bulunduruan toplam 50 sifreyi console a yazdirir.
 */
for(let i = 0; i < NUMBER_OF_PASSWORDS; i++){
    let length = Math.floor(Math.random() * 8) + 8;
    // console.log("Password : " + generatePassword(length) + "\n")
    console.log(`Password - ${i+1} : ${generatePassword(length)} \n`);
}