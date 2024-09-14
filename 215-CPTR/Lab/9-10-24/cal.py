#Logan Gardner 215-Lab-9-10-24 
#Source https://en.wikipedia.org/wiki/Zeller%27s_congruence Formula-Gegorian
#Calendar Function - Print Calendar with Month and Day

def dayOfWeekForDate(year, month, day):
    """
    >>> dayOfWeekForDate(1752, 9, 30)
    7
    >>> dayOfWeekForDate(2005, 9, 9)
    6
    >>> dayOfWeekForDate(2003, 1, 1)
    4
    """

    #Adjust January and Febuary for Zeller's Formula
    if month == 1 or month == 2:
        month = month + 12
        year = year - 1

    #Plug parameters into Zeller's Formula
    dayOfWeek = (day + ((13 * (month + 1)) // 5) + year + (year // 4) - (year // 100) + (year // 400)) % 7
    if dayOfWeek == 0:
        dayOfWeek = 7
    return dayOfWeek


user_input = input()

month_and_year = user_input.split()
month = int(month_and_year[0])
year = month_and_year[1]

if year[2:] == 00:
    if int(year) % 400 == 0:
        days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  
else:
    if int(year) % 4 == 0:
        days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    else:
        days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

months_list = ["January","Febuary","March","April","May","June","July","Augest","September","October","November","December"]

print(f'{f"{months_list[month - 1]} {year}":^20}')
print("Su Mo Tu We Th Fr Sa")

day_string = ""

for i in range(days_in_month[month - 1]):
    if i == 0:
        spaces_needed = dayOfWeekForDate(year, month, 1) - 1
        
    elif i > 0:

    elif i == days_in_month[month - 1]: