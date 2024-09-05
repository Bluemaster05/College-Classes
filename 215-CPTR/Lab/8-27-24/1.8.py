nickels = int(input('Please enter the amount of nickels: '))
dimes = int(input('Please enter the amount of dimes: '))
quarters = int(input('Please enter the amount of Quarters: '))


dollars = (nickels * 0.05) + (dimes * 0.10) + (quarters * 0.25)

print(f'Amount: ${dollars:.2f}')