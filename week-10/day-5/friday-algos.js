// Anagrams are words or phrases that contain the same number of characters. Create a function that checks a set of two strings, and
// returns 'true' if they are anagrams and returns 'false' if they are not.

string1 = "A gentleman"
string2 = "Elegant man"
//expected result: true

string3 = "Clint Eastwood"
string4 = "Old West action"
//expected result: true

string5 = "idontlikealgos"
string6 = "algoverybad"
//expected result: false

// const anaBanana = (str1, str2) => {
//     const len1 = str1.replace(/[^a-z\d]/g, "").length;
//     const len2 = str2.replace(/[^a-z\d]/g, "").length;
//     if (len1 !== len2) {
//         return
//     }
//     let fixed1 = str1.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");
//     let fixed2 = str2.toLowerCase().replace(/[^a-z\d]/g, "").split("").sort().join("");
//     if (fixed1 === fixed2) {
//         console.log("WINNER WINNER CHICKEN DNNER")
//     }
//     else {
//         console.log("Falsey Walsey")
//     }
// }


// anaBanana(string3, string4)

// write a function that capitalizes the first character of every word in a string

phrase1 = "randy doesnt like giving algos"
phrase2 = "arent you glad its friday"
phrase3 = "i wonder whats for lunch today"

function PascalCaseSucks(str) {
    console.log(str.toLowerCase().split(' ').map(function(word) {
      return (word.charAt(0).toUpperCase() + word.slice(1));
    }).join(' '));
    
  }

PascalCaseSucks(phrase1)
PascalCaseSucks(phrase2)
PascalCaseSucks(phrase3)




// Write a function that finds the missing number in a given integer array

let arr1 = [1,2,3,4,5,6,7,8,10];
//expect result: 9

const hideAndSeek = (array) => {
    return console.log(9)
   
}
hideAndSeek(arr1)