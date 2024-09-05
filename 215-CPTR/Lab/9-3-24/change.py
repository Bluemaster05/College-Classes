change = int(input())

coins = [100, 25, 10, 5, 1]
plural = ['Dollars','Quarters','Dimes','Nickels','Pennies']
singular = ['Dollar','Quarter','Dime','Nickels','Penny'] 

for coin in coins:
    amount = change // coin
    change %= coin
    if amount > 0:
        if amount == 1:
            print(f'{amount} {singular[coins.index(coin)]}')
        print(f'{amount} {plural[coins.index(coin)]}')


