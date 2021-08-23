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
// Fuck this box

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
            case "S":
            case "s":
                l = "5";
                break;
            case "T":
            case "t":
                l = "7";
                break;
            default:
                l= "p"
        }
    }
}

console.log(leetSpeak("Jannifer"))