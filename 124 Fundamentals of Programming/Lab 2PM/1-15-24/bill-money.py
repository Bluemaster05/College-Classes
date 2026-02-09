print("Enter the amount of the bill you have")
bill20 = int(input("Twenties: ")) 
bill10 = int(input("Ten dollar bills: "))
bill5 = int(input("Five dollar bills: "))
bill1 = int(input("One dollar bills: "))
coin25 = int(input("Quarters: "))
coin10 = int(input("Dimes: "))
coin5 = int(input("Nickels: "))
coin1 = int(input("Pennies: "))
cents = bill20 * 2000 + bill10 * 1000 + bill5 * 500 + bill1 * 100 + coin25 * 25 + coin10 * 10 + coin5 * 5 + coin1 * 1
print(f'${cents/100:.2f}')

