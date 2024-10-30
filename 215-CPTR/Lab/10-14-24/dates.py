"""date.py
Prof. O & CPTR-215
2021-09-29
2021-09-27 first draft
"""

class Date:
    def __init__(self, year, month, day):
        """Initializes a date given a year, month, and day.
        >>> today = Date(2021, 9, 27)
        >>> today.day
        27
        >>> Date(1776, 7, 4).year
        1776
        """
        self.year = year
        self.month = month
        self.day = day
    def previous_day(self):
        lastDayMonths = ["ERROR HERE",31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        lastDayMonthsLeap = ["ERROR HERE",31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        day = self.day
        month = self.month
        year = self.year
        day2 = day - 1
        if self.is_leap_year():
            if day2 < 1:
                month -= 1
                day2 = lastDayMonthsLeap[month]
                if month < 1:
                    year -= 1
                    month = 12
                    day2 = 31
        else:
            if day2 < 1:
                month -= 1
                day2 = lastDayMonths[month]
                if month == 0:
                    year -= 1
                    month = 12
                    day2 = 31
        date2 = Date(year, month, day2)

        return date2

    def next_day(self):
        lastDayMonths = ["ERROR HERE",31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        lastDayMonthsLeap = ["ERROR HERE",31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        day = self.day
        month = self.month
        year = self.year
        day2 = day + 1
        if self.is_leap_year():
            if day2 > lastDayMonthsLeap[month]:
                month += 1
                day2 = 1
                if month > 12:
                    year += 1
                    month = 1
                    day2 = 1
        else:
            if day2 > lastDayMonths[month]:
                month += 1
                day2 = 1
                if month > 12:
                    year += 1
                    month = 1
                    day2 = 1
        date2 = Date(year, month, day2)

        return date2

    
    def day_of_week(self):
        """Determines the day of the week self falls on. 1 = Sun thru 7 = Sat.
        >>> today = Date(2021, 9, 27)
        >>> today.day_of_week()
        2
        >>> Date(2021, 9, 25).day_of_week()
        7
        >>> Date(1776, 7, 4).day_of_week()
        5
        """
        if self.month < 3:
            m = self.month + 12
            y = self.year - 1
        else:
            m = self.month
            y = self.year
        dow = (self.day + (13 * (m + 1)) // 5 + \
               y + y // 4 - y //  100 + y // 400) % 7
        return 7 if dow == 0 else dow
    def __str__(self):
        """Returns a human-readable string representation of self
        in MMM d, yyyy format.
        >>> Date(2000, 1, 1).__str__() # not common
        'Jan 1, 2000'
        >>> str(Date(2021, 9, 27))
        'Sep 27, 2021'
        >>> independence = Date(1776, 7, 4)
        >>> print(independence)
        Jul 4, 1776
        """
        month_name = "BAD Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split()[self.month]
        return f"{month_name} {self.day}, {self.year}"
    def __repr__(self):
        """Returns a string that would evaluate to an identical Date object.
        >>> Date(2021, 9, 29).__repr__() # not common
        'Date(2021, 9, 29)'
        >>> Date(1970, 12, 31)
        Date(1970, 12, 31)
        >>> repr(Date(1984, 2, 20))
        'Date(1984, 2, 20)'
        """
        return f"Date({self.year}, {self.month}, {self.day})"
    def is_leap_year(self):
        """Determines whether self is in a leap year.
                    Truth Table
            4s place  2s place  1s place
             div 4 | div 100 | div 400 | leap?
            -------+---------+---------+-------
               0         0         0       0
               0         0         1       X
               0         1         0       X
               0         1         1       X
               1         0         0       1
               1         0         1       X
               1         1         0       0
               1         1         1       1
        >>> Date(2021, 9, 29).is_leap_year()
        False
        >>> Date(1984, 4, 27).is_leap_year()
        True
        >>> Date(2000, 1, 1).is_leap_year()
        True
        >>> Date(1900, 11, 30).is_leap_year()
        False
        """
        return self.year % 400 == 0 or \
               (self.year % 4 == 0 and self.year % 100 != 0)
    
    def equals(self, other):
        if self.day == other.day and self.month == other.month and self.year == other.year:
            return True
        else:
            return False
    def before(self, other):
        if self.day < other.day and self.month <= other.month and self.year <= other.year:
            return True
        if self.month < other.month and self.year <= other.year:
            return True
        if self.year < other.year:
            return True
        return False
    def after(self, other):
        if self.day > other.day and self.month >= other.month and self.year >= other.year:
            return True
        if self.month > other.month and self.year >= other.year:
            return True
        if self.year > other.year:
            return True
        return False
    def __add__(self, input2: int) -> "Date":
        """
        >>> Date(2000, 11, 1) + 1
        Date(2000, 11, 2)
        >>> Date(2000, 11, 2) + -1
        Date(2000, 11, 1)
        """
        if input2 == 0:
            return self
        elif input2 < 0:
            input2 = abs(input2) 
            day = self.previous_day()
            for i in range(input2 - 1):
                day = day.previous_day()
            return day
        elif input2 > 0:
            day = self.next_day()
            for i in range(input2 - 1):
                day = day.next_day()
            return day
        else: 
            return self
        

    def __sub__(self, input2: 'int | Date'):
        if isinstance(input2, int):
            return self + -input2
        else:
            times_changed = 0
            if self.before(input2):
                if self.year != input2.year:
                    for i in range(input2.year - self.year):
                        if input2.is_leap_year():
                            times_changed -= 366
                            input2.year = input2.year - 1
                            input2 = input2.previous_day()
                        else:
                            times_changed -= 365
                            input2.year = input2.year - 1
                while not self.equals(input2):
                    times_changed -= 1
                    input2 = input2.previous_day()
                return times_changed
            else:
                if self.year != input2.year:
                    for i in range(self.year - input2.year):
                        if input2.is_leap_year():
                            times_changed += 366
                            input2.year = input2.year + 1
                            input2 = input2.next_day()
                        else:
                            times_changed += 365
                            input2.year = input2.year + 1
                while not self.equals(input2):
                    times_changed += 1
                    input2 = input2.next_day()
                return times_changed

    def __eq__(self, other):
        return self.equals(other)
    def __ne__(self, other):
        return not self == other
    def __gt__(self, other):
        return self.after(other)
    def __lt__(self, other):
        return self.before(other)
    def __ge__(self, other):
        return self.after(other) or self.equals(other)
    def __le__(self, other):
        return self.before(other) or self.equals(other)

if __name__ == "__main__":
    import doctest
    doctest.testmod()

    print(Date(2015, 1, 1) - Date(2000, 2, 2))