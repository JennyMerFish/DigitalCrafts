answer = ""
while answer != "x":
    answer = input("""
    What would you like to do?\n
    Press 1 to add a store\n
    Press 2 to add items to a store list\n
    Press 3 to view lists\n
    Press x to exit.
    """)
    if answer == "1":
        storeadd = GroceryStoreApp.add_a_store()
    elif answer == "2":
        add_grocery_item

        



class GroceryStoreApp:

    def __init__(self):
        pass
          
    def add_a_store(self):
        self.title = input("What's the name of the store?")
        self.address = input("What's the address of the store?")
        self.grocery_title_list.append(self.title)
        self.grocery_address_list.append(self.address)
        self.grocery_stores_list.zip(grocery_title_list, grocery_address_list)

    
    def add_grocery_item(self):
        self.item = input("What item would you like to add to your shopping list for %s?" % self.title)
        self.price = input("What is the price of this item?\n")
        self.quantity = input("How many of this item do you need?\n")
    
    