# Strings in python are surrounded by either single or double quotation marks. Let's look at string formatting and some string methods


# String Formatting

name = "Brad"

age = 24

print("my name is " + name + " and age is " + str(age))

print('my name is {name} and age is {age}'.format(name=name, age=age))

print(f"my name is {name} and age is {age}") # only works 3.6 and above

# String Methods

s = "helloworld"

print(s.capitalize())
print(s.upper())
print(s.lower())
print(len(s))
print(s.replace("world", "everyone"))
print(s.count("o"))
print(s.startswith("h"))
print(s.find("r"))
print(s.isalpha())
print(s.isnumeric())
print(s.split("w"))

