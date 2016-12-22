from fatsecret import Fatsecret
fs = Fatsecret("b5249d29c66d4c729753596b947d6770","4842ba359e2f4675a4fba57578c8cc88")

foods = fs.foods_search("Tacos")

print(foods)