#Logan Gardner 
#Source https://en.wikipedia.org/wiki/Zeller%27s_congruence Formula-Gegorian
#215 - Lab - 9-10-24
import doctest

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

def nameForDayOfWeekNumber(weekdayNumber):
    """
    >>> nameForDayOfWeekNumber(1)
    'Sunday'
    >>> nameForDayOfWeekNumber(2)
    'Monday'
    >>> nameForDayOfWeekNumber(3)
    'Tuesday'
    >>> nameForDayOfWeekNumber(4)
    'Wednesday'
    >>> nameForDayOfWeekNumber(5)
    'Thursday'
    >>> nameForDayOfWeekNumber(6)
    'Friday'
    >>> nameForDayOfWeekNumber(7)
    'Sabbath'
    """

    if weekdayNumber == 7:
        weekdayNumber = 0
    weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sabbath"]
    weekday = weekdays[weekdayNumber - 1]
    return weekday

# print(nameForDayOfWeekNumber(dayOfWeekForDate(int(input()), int(input()), int(input()))))
# print(dayOfWeekForDate(1752, 9, 30))

doctest.testmod()