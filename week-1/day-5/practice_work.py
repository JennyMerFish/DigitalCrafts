



# def multiplication_table(num1):
#     num2 = 0
#     while num2 < 10:
#         answer = num1 * (num2 +1)
#         num2 += 1
#         print("%d X %d = %d" %(num1, num2, answer))

# print(multiplication_table(1))
# print(multiplication_table(2))
# list1 = [2, 4, 5]
# list2 = [2, 3, 6]
# products = []


# for num1, num2 in zip(list1, list2):
# 	products.append(num1 * num2)

# print(products)


# for i in range(len(X)):  

#     for j in range(len(X[0])):
#         result[i][j] = X[i][j] + Y[i][j]
 
# for r in result:
#     print(r)







def only_evens(list):
    new_list =[]
    for i in list:
        if i % 2 == 0:
            new_list.append(i)
    return new_list
   
print(only_evens([11, 20, 42, 97, 23, 10]))


def only_odds(list):
    new_list =[]
    for i in list:
        if i % 2 != 0:
            new_list.append(i)
    return new_list

print(only_odds([11, 20, 42, 97, 23, 10]))

