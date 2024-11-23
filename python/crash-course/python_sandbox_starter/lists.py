# A List is a collection which is ordered and changeable. Allows duplicate members.

numbers = [1,2,31,1,1]

print(numbers)

print(numbers[0])

print(len(numbers))

numbers.append("Mangoes")

print(numbers)

numbers.insert(2, "Mangoes")
print(numbers)

print(numbers.remove("Mangoes"))
print(numbers.remove("Mangoes"))
print(numbers.sort())
print(numbers)

