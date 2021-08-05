# Assignment 1

sumOfNumbers = [1,2,3,4,5]
print(sum(sumOfNumbers))

# Assignment 2

numbers = [8,3,6,3,7,9,7,0,4,5,1]
numbers.sort()
print(numbers[-1])

# Assignment 3

print(numbers[0])

# Assignment 4

evenNumbers = filter(lambda x: (x % 2 == 0), numbers)
for num in evenNumbers:
    print(num)

# Assignment 5
positives = filter(lambda x: (x > 0), numbers)
for pos in positives:
    print(pos)

# Assignment 6

positiveNumbers = list(filter(lambda x: (x > 0), numbers))
print(positiveNumbers)

# Assignment 7

factor = 3
newNumberList =[]
for nums in numbers:
    newNumberList.append(nums * 3)
print(newNumberList)

# Assignment 8

reversingString = "Dammit I'm mad" [::-1]
print(reversingString)



    
    









