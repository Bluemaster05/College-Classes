user_num = float(input("Please ener a number: "))
div_num = float(input("Please enter a dividing number: "))
first = 0
second = 0
third = 0

user_num = float(user_num) // float(div_num)
first = int(user_num)
user_num = float(user_num) // float(div_num)
second = int(user_num)
user_num = float(user_num) // float(div_num)
third = int(user_num)

print(f"{first} {second} {third}")