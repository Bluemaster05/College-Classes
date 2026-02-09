#Enter User Money
money = float(input("Please enter change: "))
cents = int(round(money*100, 0))

bill20 = 2000 
bill10 = 1000
bill5 = 500
bill1 = 100
cent25 = 25
cent10 = 10
cent5 = 5
cent1 = 1
ubill20 = 0
ubill10 = 0
ubill5 = 0
ubill1 = 0
ucent25 = 0
ucent10 = 0
ucent5 = 0
ucent1 = 0

#calculate bills Used
ubill20 = cents // bill20
cents = cents % bill20

ubill10 = cents // bill10
cents = cents % bill10

ubill5 = cents // bill5
cents = cents % bill5

ubill1 = cents // bill1
cents = cents % bill1

ucent25 = cents // cent25
cents = cents % cent25

ucent10 = cents // cent10
cents = cents % cent10

ucent5 = cents // cent5
cents = cents % cent5

ucent1 = cents // cent1
cents = cents % cent1

#Print Results
print("")
print(f"Twenties: {ubill20}")
print(f"Tens: {ubill10}")
print(f"Fives: {ubill5}")
print(f"Ones: {ubill1}")
print(f"Quarters: {ucent25}")
print(f"Dimes: {ucent10}")
print(f"Nickels: {ucent5}")
print(f"Pennies: {ucent1}")