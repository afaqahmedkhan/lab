# A variable is a container for a value, which can be of various types

'''
This is a 
multiline comment
or docstring (used to define a functions purpose)
can be single or double quotes
'''

"""
VARIABLE RULES:
  - Variable names are case sensitive (name and NAME are different variables)
  - Must start with a letter or an underscore
  - Can have numbers but can not start with one
"""
x = 1
y = 2.5
name = "Josh"
isOkay = True

a, b, c = (True, "B", 30)

print(a,b,c)

print(type(a))

a = str(a) + "False"

print(type(a))

print(a)
