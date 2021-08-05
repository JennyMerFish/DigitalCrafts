firstNumber = int(input("What is your first number? \n"))
operand = input("What are we doing with this number? \n")
secondNumber = int(input("What's the second number? \n"))

if operand == "+":
    print(firstNumber + secondNumber)

elif operand == "-":
    print(firstNumber - secondNumber)

elif operand == "*":
    print(firstNumber * secondNumber)

elif operand == "/":
    print(firstNumber / secondNumber)

else:
    print("What do you want from me?")
    
    
