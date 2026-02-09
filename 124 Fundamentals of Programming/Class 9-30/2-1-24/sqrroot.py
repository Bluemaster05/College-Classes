from math import isclose

#Get input
i = float(input('Please enter number: '))

r = 1   #Set the provisional root to one

while not isclose(r*r, i):
    print(f'The provisonal root is {r}')
    r = (r+i/r) / 2

print(f'The square root of {i} is {r}')