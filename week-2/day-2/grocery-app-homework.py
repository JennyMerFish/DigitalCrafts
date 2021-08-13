

store_list = []
item_list = []


class GroceryApp:
    def __init__(self, title, address):
        self.title = title
        self.address = address
        self.store_list = store_list
        

    
class Item:
    def __init__(self, item, price, quantity):
        self.item = item
        self.price = price
        self.quantity = quantity

    def add_items(self, item, price, quantity):
        self.item = item
        self.price = price
        self.quantity = quantity


   

answer = ""
while answer != "x" or answer != "X":
    answer = input("""
    What would you like to do?\n
    Press 1 to add a store\n
    Press 2 to add items to a store list\n
    Press 3 to view lists\n
    Press x to exit.
    """)
    if answer == "x" or answer =="X":
        break

    elif answer == "1":
        title = input("What's the name of store?")
        address = input("What's the address of the store?")
        store = GroceryApp(title, address)
        store_list.append(store)

    elif answer == "2":
        count = 1
        for store in store_list:
            print(count, store.title)
            count += 1
        which_list = int(input("Which store list would you like to add to?"))
        store_list.items[which_list-1].append(items)
        item = input("What item would you like to add?")
        price = input("How much is it?")
        quantity = input("How many do you need?")
        items = Item(item, price, quantity)
        item_list.append(items)

        
        


    elif answer == "3":
        for store in store_list:
            print(store.title)
        

   


    
