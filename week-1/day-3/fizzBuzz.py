numberToFizzBuzz = int(input("Give me a number to FizzBuzz. \n"))

if numberToFizzBuzz % 3 == 0 and numberToFizzBuzz % 5 == 0:
    print("**Fizz Buzz!**")

elif numberToFizzBuzz % 3 == 0:
    print("**Fizz!**")

elif numberToFizzBuzz % 5 == 0:
    print("**Buzz!**")

else:
    print("No way.")