loop = True
toDoList = []
while loop:
    ans = input("Press 1 to add task \nPress 2 to delete task \nPress 3 to view all tasks \nPress q to quit\n ")
    if ans == "1":
        titleList =[]
        priorityList =[]
        addTitle = input("What is the title of the task? \n")
        addPriority = int(input("What priority is this task, 1 - High, 2 - Medium, or 3 - Low?\n"))
        if addPriority == "1":
            priority = " - High"
        elif addPriority == "2":
            priority = " - Medium"
        elif addPriority == "3":
            priority = " - Low"
        titleList.append(addTitle)
        priorityList.append(addPriority)

        
        print("Here is your revised To-Do list" + str(toDoList))
    
    elif ans == "2":
        for key, value in enumerate(toDoList):
            print(key, value)
        delTask = int(input("Which task would you like to delete? \n"))
        
        print("Here is your revised To-Do list: " + str(toDoList))
    elif ans == "3":
        print(toDoList)
    elif ans == "q":
        print("Thanks for using To-Do list!")
        loop = False    
    else:
        print("That is not an option, try again, DUMMY.")



    

    