iterations = int(input())
list = []

for i in range(iterations):
    number = float(input())
    list.append(number)

largest = max(list)

for item in list:
    print(f'{item/largest:.2f}')