num = 0
goal = 23
while num != goal:
    num = int(input('Please enter a number: '))
    if num < goal:
        print('too low')
    elif num > goal:
        print('too high')
    elif num == goal:
        print(f'Just right. The number was {goal}!!!')