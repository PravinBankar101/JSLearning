


function reverseString(str){
    let resultString='';
for (let index = str.length -1 ; index >=0 ; index--) {
    
    let char= str.charAt(index);

    if(char !=" "){
        resultString = resultString.concat(' ').concat(char)    //or-->resultString = resultString + char;
                                                                //or--> resultString += char ;
       
    }
}
console.log(`The reverse String without empty spaces is: ${resultString}`);

}



console.log(`Given String is : "Hard work always pays back" `);
reverseString("Hard work always pays back");

console.log(` `);
console.log(`Given String is : "Soon I will be Angular IT Champ"`);
reverseString("Soon I will be Angular IT Champ");