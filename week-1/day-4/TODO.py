loop = True
toDoList =[]

while loop:

    ans = input("Press 1 to add task \nPress 2 to delete task \nPress 3 to view all tasks \nPress q to quit\n ")
    
    if ans == "1":
        addTitle = input("What is the title of the task? \n")
        addPriority = input("What priority is this task, High, Medium, or Low?\n")
        task = addTitle + " - " + addPriority
        toDoList.append(task)
        print("Here is your revised To-Do list" + str(toDoList))

    
    elif ans == "2":
        for key, value in enumerate(toDoList):
            print(key, value)

        delTask = int(input("Which task would you like to delete? \n"))
        del toDoList[delTask]

        print("Here is your revised To-Do list: " + str(toDoList))
    
    elif ans == "3":
        taskDict ={}
        taskDict = toDoList
        count = 1
        for task in toDoList:
           print(count, task)
           count += 1
    

    
    elif ans == "q":
        print("Thanks for using To-Do list!")
        loop = False    
    
    else:
        print("That is not an option, try again, DUMMY.")



    

    