
"""

"""


class Date():
    def __init__(self, year, month,day) -> None:
        self.year = year
        self.month = month
        self.day = day

    def print(self):
        """
        >>> today = Date(2024, 10, 1)
        >>> today.print()
        October 1, 2024
        """
        pass
        monthNames = "WRONG January Febuary March April May June July Augest September October November December".split()
        print(f'{monthNames[self.month]} {self.day}, {self.year}')


if __name__ == "__main__":
    import doctest
    doctest.testmod()