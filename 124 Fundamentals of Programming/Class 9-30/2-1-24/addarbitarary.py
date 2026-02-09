print('Please enter non-negative numbers (-1 ends the list)')
sum = 0
count = 0
done = False
while not done:
    entry = float(input('=>'))     
    if entry >= 0.0:
        sum += entry
    else:
        done = True
      
print(f'The sum is {sum}')