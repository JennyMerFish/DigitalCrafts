


firstName = input("What is your first name?")
#print(firstName)
lengthOfFirstName = len(firstName)
if lengthOfFirstName <= 0:
    print("Please enter your name")
else: 
    print("Hi there, " + firstName)