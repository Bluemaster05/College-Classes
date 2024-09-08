number = int(input())
string = ""

while number > 0:
    string += str(number % 2)
    number = number // 2

print(string)
