import random

class Characters:
    def __init__(self, name, weapon, health=100, attack_power=10):
        self.name = name
        self.weapon = weapon
        self.health = health
        self.attack_power = attack_power

      
    def hero_lose_health(self):
        self.health -= self.attack_power
        print("Oh no! %s hit you with his %s! \nYour health is now %d." % (villain.name, villain.weapon, hero.health))

    def hero_runaway(self):
        print("You ran away.\nThat's so you %s" % user_name)
    
    def hero_eat_apples(self):
        if hero.health < 100:
            self.health += 10
            print("You've eaten apples to restore your health\nYour health is now %s." % self.health)
        elif hero.health >= 100:
            print("You don't need any apples\n\nTRUST me.\n")
    
    def defend_yourself(self):
        print("You've defended the attack successfully!")


    def deal_damage(self):
        villain.health -= hero.attack_power
        print("You've dealt %d damage to %s with your %s" % (self.attack_power, villain.name, hero.weapon))

        if villain.health == 0:
            print("Oh my god\nWOW.\nJust WOW %s\nYou've defeated %s!\nI didn't think you were gonna survive, honestly." % (user_name, villain.name))
            user_choice == "x"
        
            


villain = Characters("Joe Frasier", "Laser")
print("Welcome to Hyrule Field!\n")

user_name = input("What would you like your hero name to be?\n")
if user_name == "":
    print("Ooooookay. I'm just gonna call you DumDum")
    user_name = "DumDum"

print("Thats a terrible hero name.\n\n *Sigh*\n\n I guess it'll have to do.\n")

user_weapon = input("What is your weapon of choice?\n")

print("I mean...\nyou know what, whatever.\n\n")

print("Good thing we have a\n **cough cough**\n\nHERO\n\nhere to save us, because a wild %s has appeared!" % villain.name)



hero = Characters(user_name, user_weapon)  

# print(hero.health)
# print(hero.hero_lose_health())
# print(hero.health)

# print(villain.health)
# print(villain.deal_damage())
# print(villain.health)




# print(hero.hero_lose_health())
# print(villain.name, villain.health, villain.weapon)
# villain.villain_lose_health()
# print(hero.name)
# print(villain.health)
attack_chance = random.randint(1, 10)
user_choice = ""
while user_choice != "x" or user_choice != "X" or hero.health != 0 or villain.health != 0:
    
    user_choice = input("""
    What would you like to do, %s?\n
    Press 1 to attack %s\n
    Press 2 to run away...that's probably your best bet.\n
    Press 3 to eat some apples to rebuild your health.\n
    Press x to exit, or if you're a weenie.\n 
    """ % (user_name, villain.name))

    if villain.health == 0:
        print("Just kidding, you killed the bad guy, go home %s" % user_name)
        user_choice == "x"
        break

    if hero.health == 0:
        print("You died.\nIt's ok.\n\nWe all expected it.")
        print("Start over again %s" % user_name)
        user_choice == "x"
        break

    elif hero.health == 0 and villain.health == 0:
        print("Well now you've killed each other\nAt the same time\nThat's some Monty Python BS right there")
        user_choice == "x"
        break

    elif user_choice == "1":
        hero.deal_damage()
        print("%s's health is now: " % villain.name + str(villain.health))
        if attack_chance >= 6:
            hero.hero_lose_health()

   
    elif user_choice == "2":
        hero.hero_runaway()
        print("I guess you saved yourself a few minutes...\nYou should really work on your cardio %s" % user_name)

    elif user_choice == "3":
        hero.hero_eat_apples()
        

    elif user_choice == "x" or user_choice == "X":
        break
    
    else: 
        print("That's not an option\nYou unsalted pretzel.")
