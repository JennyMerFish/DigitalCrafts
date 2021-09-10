// #1
// Given a string with a date "09/10/2021", write a function that removes the "/" and returns the following date format:
// expected result: 20210910

// const str = "09/10/2021";

// function formatDate(str) {
//     newDate = new Date(str)
//     const newDate2 = newDate.toISOString()
//     newDate3 = newDate2.slice(0,10)
//     newDate4 = newDate3.replace('-', "")
//     newDate5 = newDate4.replace('-', "")
//     console.log(newDate5)
// }
// formatDate(str)
// #2s
// Write a function that checks if a string is a palindrome. Function should return true or false. A palindrome is a word, phrase, or sequence that reads the same backward as forward.
// Ex. racecar, Anna

const str1 = "kayak"
const str2 = "backendisawesome"
const str3 = "mom"

function checkString(string){
    for (i = 0; i < string.length; i++) {
        if (string[i] === string[-i -1]){
            return console.log(true)
        }
        else return console.log(false)
    }

}
checkString(str1)