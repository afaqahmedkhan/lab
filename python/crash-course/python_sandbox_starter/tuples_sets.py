# A Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
 
fruits = ("apples", "banana")

#unchangeable
#fruits[0] = "oranges"

#del fruits

print(fruits)

# A Set is a collection which is unordered and unindexed. No duplicate members.

fruit_set = {"apples", "oranges", "mangoes"}

print("apples" in fruit_set)

fruit_set.clear()

print(fruit_set)