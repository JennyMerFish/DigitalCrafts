// Madlib
function madLib(noun, schoolSubject) {
    return (noun + "'s favorite subject in school is " + schoolSubject)

}
console.log(madLib("Anushka", "math"))

// Tip Calculator
function tipAmount(total, serviceLevel) {
    if (serviceLevel === "good" || serviceLevel === "Good") {
        return ("Tip amount is $" + (total * .2))
    } else if (serviceLevel === "fair" || serviceLevel === "Fair") {
        return ("Tip amount is $" + (total * .15))
    } else if (serviceLevel === "bad" || serviceLevel === "Bad") {
        return ("Tip amount is $" + (total * .1))

    }
}
console.log(tipAmount(100, "Good"))

// Tip Calculator 2.0
function tipAmount2(total, serviceLevel) {
    if (serviceLevel === "good" || serviceLevel === "Good") {
        return ("Total amount with tip is $" + ((total * .2) + total))
    } else if (serviceLevel === "fair" || serviceLevel === "Fair") {
        return ("Total amount with tip is $" + ((total * .15) + total))
    } else if (serviceLevel === "bad" || serviceLevel === "Bad") {
        return ("Total amount with tip is $" + ((total * .1) + total))

    }
}
console.log(tipAmount2(100,"Bad"))

// Print Numbers While Loop
function printNumbers(number1, number2) {
    let i = number1
    while (i <= number2) {
        console.log(i)  
        i++ 
    } 
}



// Print Numbers For Loop
function printNumbers(start, end) {
    for (let i = start; i <= end; i++) {
        console.log(i)
    }    
}

// printNumbers(1,10)

// Print a Square
function printSquare(number) {
    let string =""
    for (i = 0; i<=number; i++) {
        for (j=0; j<=number; j++) {
            string += "*"
        }
      string += "\n"  
    }
    return string
}

// console.log(printSquare(5))

// Print A Box
function printABox(n){
    
    let string = "";

    for (let i = 0; i < n; i++) { 
      for (let j = 0; j < n; j++) { 
        if (i === 0 || i === n - 1) {
          string += "*";
        }
        else {
          if (j === 0 || j === n - 1) {
            string += "*";
          }
          else {
            string += " ";
          }
        }
      }
      
      string += "\n";
    }
    
    console.log(string);
}
// I tried and tried and tried to get this to work, and I couldn't. I found the answer online, and copied it line for line. Upon doing so, I realized I had my else statement as an else if, and the last else statement outside that specific for loop, and that was causing my holdup. I really struggle grasping the logic for this one. 

printABox(5)

// Print A Banner
function printBanner(wordsToPrint) {
    row = ""
    for (i =0; i <= (wordsToPrint.length + 2); i++) {
        row += "-"

    } 
    console.log(row)
    console.log("-" + wordsToPrint + "-")
    console.log(row)
}
    
printBanner("Damn this is hard")
    
// LeetSpeak
// A => 4 E => 3 G => 6 I => 1 O => 0 S => 5 T => 7
// This doesn't work. I think it's my for loop at the top that's messing it up but I don't know why. 
function leetSpeak(word) {
    for (l in word) {
        switch (l) {
            case "A":
            case "a":
                l = "4";
                break;
            case "E":
            case "e":
                l = "3";
                break;
            case "G":
            case "g":
                l = "6";
                break;
            case "I":
            case "i":
                l = "1";
                break;
            case "O":
            case "o":
                l = "0";
                break;
        
            }
           
    }

}
console.log(leetSpeak("Jennifer"))


function longVowels(word) {
    let vowelArray = ["a", "e", "i", "o", "u"]
    for (l in word) {
        if (l !== word[0] && l !== word[-1]) {
            if (vowelArray.includes(word[l])) {
                console.log(word[l] +l +l +l)
                //I can target the vowel but can't get it to multiply. 
                // AARRRGGGHHHHH!!!!!!!
                
                
            }
        }
    }

  
}

console.log(longVowels("Cheese"))


// Just the positives


function positiveNumbers(array) {
    newArray = []
    for (n in array) {
        if (array[n] >= 0) {
            newArray.push(array[n])

        }
    }return newArray
}

console.log(positiveNumbers([1,-3,4,5,-3]))

// Caesar Cipher

function cipher(word) {
    

}