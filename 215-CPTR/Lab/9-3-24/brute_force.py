''' Read in first equation, ax + by = c '''
a = int(input())
b = int(input())
c = int(input())

''' Read in second equation, dx + ey = f '''
d = int(input())
e = int(input())
f = int(input())

correctx = 0
correcty = 0
no_solution = True

for x in range(-10, 11):
    for y in range(-10, 11):
        if a * x + b * y == c and d * x + e * y == f:
            correctx, correcty = x,y
            no_solution = False
            print(f'x = {correctx} , y = {correcty}')
if no_solution:
    print("There is no solution")