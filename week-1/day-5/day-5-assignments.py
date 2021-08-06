# # Ok google, who are the original avengers?

# ogAvengers = ["Captain America", "Thor", "Iron Man", "Black Widow", "Hulk"]

# ogAvengers.append("Ant-Man")
# del ogAvengers[2]
# ogAvengers.insert(1, "JennyBoBenny")
# print(ogAvengers)


# # Fizz Buzz Part II
# for number in range(1,101):
#     if number % 3 == 0 and number % 5 == 0:
#         print("Fizz Buzz")
#     elif number % 3 == 0:
#         print("Fizz")
#     elif number % 5 == 0:
#         print("Buzz")
#     else:
#         print(number)

#  Moving zeroes!

array1 = [0,1,0,3,12]
array2 = [1,7,0,0,8,0,10,12,0,4]

def popTheZeroes(randArray):
    for number in randArray:
        if number == 0:
            randArray.remove(number)
            randArray.append(number)
    print(randArray)

popTheZeroes(array1)
popTheZeroes(array2)

    
   
        

