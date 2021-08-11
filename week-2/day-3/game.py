
class Characters:
    def __init__(self, name, attack_power, weapon, health=100):
        self.name = name
        self.health = health
        self.attack_power = attack_power
        self.weapon = weapon
    
    
      
    def villainLoseHealth(self):
        villain.health -= hero.attack_power

    def eat_apples(self):
        hero.health += 10
        print("You've eaten apples to restore your health\nYour health is now %s." % self.health)

class Hero(Characters):
    def heroLoseHealth(self):
        self.health -= v
        print("Oh no! You've taken damage! \nYour health is now %s." % self.health)
    



villain = Characters("Ganon", 27, "Laser")
hero = Characters("Princess Zelda", 39, "Sealing Bow")  

print(hero.health)
print(villain.name)
hero.loseHealth()

