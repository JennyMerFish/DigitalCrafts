# Create a class called User which consists of (first_name, last_name) properties. Create a class name Address which consists of (street, city, state, zip_code) properties.

# Create a relationship between User and Address in a way that a single user can have multiple addresses.

# Add a new method/function to User class called add_address(self, address) which would take an address as an argument and add it to a list/array of addresses.

# Add another method to the User class called display_addresses(self) which would display all the addresss of that user.
# Defined User class
class User:
    def __init__(self, first_name, last_name):
        self.first_name = first_name
        self.last_name = last_name
        self.address_list = []
    
      # Add address function  

    def add_address(self,address):
        self.address_list.append(address)

        
    #  print address list

    def display_addresses(self):
        print(self.address_list)
        

#  defined Address class
class Address(User):
    def __init__(self, street, city, state, zip_code):
        #super().__init__(first_name, last_name)
        self.street = street
        self.city = city
        self.state = state
        self.zip_code = zip_code

#  testing testing, 1, 2 , mic check
jenny = User("Jenny", "Neasbitt")
jennyAddress = Address("Thistledew", "Houston", "Texas", 77082)


jenny.add_address(jennyAddress)


jenny.display_addresses()



# Activity 2
# In this activity, you will create a class to represent a Table. What properties you will add to the table?

# Also, go ahead and create 2 objects using the Table blueprint to represent a particular table.



class Table:
    def __init__(self, top, noOfLegs, height, material):
        self.top = top
        self.noOfLegs = noOfLegs
        self.height = height
        self.material = material

coffee_table = Table("glass", 3, "16 inches", "iron")

bar_table = Table("marble", 4, "48 inches", "wood")




#  test 

# coffee_table = Table("glass", 4, "24 inches", "wood")
# print (coffee_table.height)

# bar_table = Table("marble", 3, "48 inches", "iron")
# print(bar_table.noOfLegs)


# Activity Bank Account

# Create a class called BankAccount.
# Add properties for balance and account_number
# Allow the user to deposit funds to the account. This can be accomplished by adding a deposit function to the BankAccount class.
# Allow the user to withdraw funds from the account. This can be accomplished by adding a withdraw function to the BankAccount class.
# Allow the user to transfer funds between two accounts. This can be accomplished by adding a transfer_funds function to the BankAccount class.
# After creating the BankAccount class, along with all the functions make sure to create instance of BankAccount and perform actions.
# Example:

# checking_account = BankAccount("FD332", 100) checking_account.deposit(50) print(checking_account.balance) # $150

class BankAccount:
    def __init__(self, balance, account_number):
        self.balance = balance
        self.account_number = account_number

    #  deposit function
    def deposit(self, moneyToDep):
        self.balance += moneyToDep

    #  withdraw function
    def withdraw(self, moneyToWithdraw):
        self.balance -= moneyToWithdraw

    #transfer funds function
    def transfer(self, origin_account, moneyToTransfer, dest_account):
        origin_account.balance -= moneyToTransfer
        dest_account.balance += moneyToTransfer

    
jennys_account = BankAccount(10, "8675309")

# print(jennys_account.balance)
# jennys_account.withdraw(5)
# print(jennys_account.balance)
# jennys_account.deposit(25)
print(jennys_account.balance)

britts_account = BankAccount(20, "42")
print(britts_account.balance)

jennys_account.transfer(jennys_account, 10, britts_account)
print(britts_account.balance)
print(jennys_account.balance)

