title = input("What's the name of store?")
address = input("What's the address of the store?")

class GroceryApp:
    def __init__(self, title, address):
        self.title = title
        self.address = address

    def add_a_store(self):
        self.title = input("What's the name of the store?")
        self.address = input("What's the address of the store?")

    
answer = ""
while answer != "x":
    answer = input("""
    What would you like to do?\n
    Press 1 to add a store\n
    Press 2 to add items to a store list\n
    Press 3 to view lists\n
    Press x to exit.
    """)
        