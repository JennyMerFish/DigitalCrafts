



def multiplication_table(num1):
    num2 = 0
    while num2 < 10:
        answer = num1 * (num2 +1)
        num2 += 1
        print("%d X %d = %d" %(num1, num2, answer))

print(multiplication_table(1))
print(multiplication_table(2))