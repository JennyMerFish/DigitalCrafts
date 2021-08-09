joesFavoriteCars = {
    "cars list" : ["mustang", "cobra", "el camino"],
    "favorite movie" : "Die Hard",
    "superStonks" : {
        "tsla": 5,
        "doge" : "moon"
    } 
}

# print(" ".join(joesFavoriteCars["cars list"]))
# print("\n".join(joesFavoriteCars["cars list"]))

# joesFavoriteCars["favorite food"] = "sushi"
# print(joesFavoriteCars)

if joesFavoriteCars.get("favorite vacation") == None:
    joesFavoriteCars["superStonks"]["tsla"]= [5, 10]
print(joesFavoriteCars["superStonks"]["tsla"])

