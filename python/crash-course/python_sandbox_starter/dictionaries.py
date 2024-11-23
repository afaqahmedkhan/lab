# A Dictionary is a collection which is unordered, changeable and indexed. No duplicate members.
# Read more about dictionaries at https://docs.python.org/3/tutorial/datastructures.html#dictionaries

person = {
    "fname": "John",
    "lname": "Afaq",
}

print(person)

person2 = dict(fname="Sara",lname="Sara")

print(type(person2))

print(person['fname'])

print(person.get('fname'))

person['phone'] = 123123

print(person.keys())
print(person.items())

person2 = person.copy()

print(person2)

del(person['phone'])
person.pop("fname");

print(person);