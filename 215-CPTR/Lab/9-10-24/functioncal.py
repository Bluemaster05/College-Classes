#Logan Gardner 215-Lab-9-10-24 
#Source https://en.wikipedia.org/wiki/Zeller%27s_congruence Formula-Gegorian
#Calendar Function - Print Calendar with Month and Day

def calfunction(month, year):

    day_string = ""
    week_return = 0
    times_run = 0
    
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


    if str(year)[2:] == "00":
        if int(year) % 400 == 0:
            days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        else:
            days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]  
    else:
        if int(year) % 4 == 0:
            days_in_month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        else:
            days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    def return_needed_query() -> None:
        nonlocal week_return
        nonlocal day_string
        nonlocal times_run
        if week_return == 7:
            day_string += "\n"
            week_return = 0
            times_run += 1
        else:
            day_string += " "
        return None   

    year = int(year)

    months_list = ["January","February","March","April","May","June","July","Augest","September","October","November","December"]

    day_string += f'{f"{months_list[month - 1]} {year}":^20}'.rstrip()
    day_string += "\n"
    day_string += "Su Mo Tu We Th Fr Sa\n"

    

    for i in range(days_in_month[month - 1]):
        if i == 0:
            spaces_needed = dayOfWeekForDate(year, month, 1) - 1
            day_string += "   " * spaces_needed
            day_string += f"{i + 1:>2}"
            week_return = spaces_needed + 1
            return_needed_query()
        elif i == days_in_month[month - 1] - 1:
            day_string += f"{i + 1:>2}"
        else:
            day_string += f"{i + 1:>2}"
            week_return += 1
            return_needed_query()
    day_string += "\n"
    if times_run == 3:
            day_string += "\n\n"
    elif times_run == 4:
            day_string += "\n"
    return day_string

print(calfunction(2, 2020))