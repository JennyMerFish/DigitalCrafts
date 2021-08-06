loop = True
toDoList =[]
def addATask():
    addTitle = input("What is the title of the task? \n")
    addPriority = input("What priority is this task, High, Medium, or Low?\n")
    task = addTitle + " - " + addPriority
    toDoList.append(task)
    return("Here is your To-Do list" + str(toDoList))
    
def delATask():
    for key, value in enumerate(toDoList):
        print(key, value)
    delTask = int(input("Which task would you like to delete? \n"))
    del toDoList[delTask]
    return("Here is your revised To-Do list: " + str(toDoList))  

def viewATask():
    taskDict ={}
    taskDict = toDoList
    count = 1
    for task in toDoList:
        print(count, task)
        count += 1

def quitProgram():
    return("Thanks for using the refactored version of To-Do list app, have a great day!")
    


while loop:

    ans = input("Press 1 to add task \nPress 2 to delete task \nPress 3 to view all tasks \nPress q to quit\n ")
    if ans == "1":
        print(addATask())    
        
    elif ans == "2":
        print(delATask())
         
    elif ans == "3":
        print(viewATask())
        
    elif ans == "q":
        print(quitProgram())
        loop = False
        
    
    else:
        print("That is not an option, try again, DUMMY.")



    

    