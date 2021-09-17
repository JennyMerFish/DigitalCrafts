// Write a function to return the maximum occurring character in the input string e.g., if input string is "Test" then function should return 't'.
// Note: capital letter 'T' and small letter 't' should count as the same.

str1 = "holddogecoinkek"
// result: o
str2 = "aahhanotheralgo"
// result: a
str3 = "randywhyyyyy"
// result: y

function mostOfALetter(str) {
     max = 0,
    maxChar = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           maxChar = char;
        }
     });
     return console.log(maxChar);
   };
mostOfALetter(str1)


//  Given an array of numbers and a stand alone number, return all combinations of numbers in the array that add up to the stand alone number.

let array = [2,5,8,3,-2,9,0]
let targetSum = 3
// Result: [ 5, -2 ], [ 3, 0 ], [ -2, 5 ], [ 0, 3 ]


function findTwo(arr, target) {
    hashMap = {}
    results = []
    for (let i = 0; i < array.length; i++) {
        if (hashMap[arr[i]]) {
            results.push([hashMap[arr[i]], arr[i]])
        }
        else {
            hashMap[target - arr[i]] = arr[i];
        }
    }
    return console.log(results);
}

findTwo(array, targetSum)




// Given a number N return the index value of the Fibonacci sequence, where the sequence is:
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

// For example, if N = 8, the function should return the number '21' which is the 8th index of the Fibonacci sequence

number = 8
// result: 21