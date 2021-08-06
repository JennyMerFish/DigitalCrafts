# # Strings: "alphabet", "barbados", "crunchy"
string1 = "alphabet"
string2 = "barbados"
string3 = "crunchy"
string4 = "mmddgghhrr"
NO_OF_CHARS = 256

def getCharCountArray(string):
    count = [0] * NO_OF_CHARS
    for i in string:
        count[ord(i)]+= 1
    return count

def firstNonRepeating(string):
    count = getCharCountArray(string)
    index = -1
    k = 0
 
    for i in string:
        if count[ord(i)] == 1:
            index = k
            break
        k += 1
 
    return index


index = firstNonRepeating(string4)

if index == -1:
    print("Either all characters are repeating or string is empty")
else:
    print("First non-repeating character is " + string4[index])
 
   
