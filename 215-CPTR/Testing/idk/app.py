from datetime import date, timedelta, time

# 1 Complete read_date()
def read_date(date_str: str):
    """Read a string representing a date in the format 2121-04-12, create a
    date object from the input string, and return the date object
    """
    date_str = date_str.split("-")
    for i in date_str:
        if i[0] == 0:
            date_str[date_str.index(i)] = i[1:]
        date_str[date_str.index(i)] = int(i)
    return date(date_str[0],date_str[1],date_str[2])
    

# 2. Use read_date() to read four (unique) date objects, putting the date objects in a list
dates_list = []
for i in range(4):
    dates_list.append(read_date(input()))

# 3. Use sorted() to sort the dates, earliest first
sorted(dates_list)

# 4. Output the sorted_dates in order, earliest first, in the format mm/dd/yy
for i in range(4):
    print(dates_list[i])
# 5. Output the number of days between the last two dates in the sorted list
#    as a positive number
print(abs(dates_list[2] - dates_list[3]))
# 6. Output the date that is 3 weeks from the most recent date in the list

# 7. Output the full name of the day of the week of the earliest day
