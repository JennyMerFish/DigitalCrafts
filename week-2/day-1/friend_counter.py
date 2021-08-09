# # Print Elizabeth's phone number.
# # Add an entry to the dictionary: Kareem's number is 938-489-1234.
# # Delete Alice's phone entry.
# # Change Bob's phone number to '968-345-2345'.
# # Print all the phone entries.
# #Problem 1
# phonebook_dict = {
#   'Alice': '703-493-1834',
#   'Bob': '857-384-1234',
#   'Elizabeth': '484-584-2923'
# }
# print(phonebook_dict['Elizabeth'])
# phonebook_dict['Kareem'] = '938-489-1234'
# print(phonebook_dict)
# del phonebook_dict['Alice']
# print(phonebook_dict)
# phonebook_dict['Bob'] = '968-345-2345'
# print(phonebook_dict)

#Problem 2
# Write a python expression that gets the email address of Ramit.
# Write a python expression that gets the first of Ramit's interests.
# Write a python expression that gets the email address of Jasmine.
# Write a python expression that gets the second of Jan's two interests.
#
friends = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ],
}
print(friends['email'])
print(friends['interests'][0])
print(friends['friends'][0]['email'])
print(friends['friends'][1]['interests'][1])




friends = {
  'name': 'Ramit',
  'email': 'ramit@gmail.com',
  'interests': ['movies', 'tennis'],
  'friends': [
    {
      'name': 'Jasmine',
      'email': 'jasmine@yahoo.com',
      'interests': ['photography', 'tennis']
    },
    {
      'name': 'Jan',
      'email': 'jan@hotmail.com',
      'interests': ['movies', 'tv']
    }
  ],
}


def friend_counter(dictionary):
  if dictionary.get("friends") != None:
    dictionary["Friend Count"] = len(dictionary["friends"])
  return dictionary

print(friend_counter(friends))