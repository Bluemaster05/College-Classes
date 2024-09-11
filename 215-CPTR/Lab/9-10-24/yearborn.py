# Logan Gardner
# 
#
yearBorn = int(input("Enter the year you were born (4 digits, i.e., 1998):\n"))
print(f'You entered: {yearBorn}')

years_old = 2023 - yearBorn
print(f"On your birthday this year, you'll be {years_old} years old.")
days_old = int(round(years_old * 365.2422, 0))
print(f"You'll have lived {days_old}±1 days.")