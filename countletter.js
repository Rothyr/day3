var obj = {

};

function countLetters (input) {
 var listOfLetters = input.split(" ").join("").toLowerCase().split("");
 for (var i = 0; i < listOfLetters.length; i++) {
    // is the current letter in my obj
    if (obj[listOfLetters[i]]) {
     obj[listOfLetters[i]]++;
    } else {
     obj[listOfLetters[i]] = 1;
    }
 }
 return obj;
}





console.log(countLetters("lighthouse in the house"));