class Duration():
    def __init__(self, input1: int | str, input2: None | int = None, input3: None | int = None) -> None:
        self.hr = 0
        self.min = 0
        self.sec = 0
        self.Positive = True
        numbers = "1 2 3 4 5 6 7 8 9 0".split()
        if isinstance(input1, str):
            if "d" in input1 or "h" in input1 or "m" in input1 or "s" in input1:
                if 's' in input1:
                    if len(input1) > 2 and input1[-3] != 'm' and input1[-3] != 'h' and input1[-3] != 'd':
                        if input1[-3] in numbers and input1[-2] in numbers:
                            self.sec = int(input1[-3:-1])
                            input1 = input1[:-3]
                    elif input1[-2] in numbers:
                        self.sec = int(input1[-2:-1])
                        input1 = input1[:-2]
                if 'm' in input1:
                    if len(input1) > 2 and input1[-3] != "h" and input1[-3] != 'd':
                        if input1[-3] in numbers and input1[-2] in numbers:
                            self.min = int(input1[-3:-1])
                            input1 = input1[:-3]
                    elif input1[-2] in numbers:
                        self.min = int(input1[-2:-1])
                        input1 = input1[:-2]
                if input1 != '':
                    if input1[0] == '-':
                        self.Positive = False
                        input1 = input1[1:]
                if 'd' in input1 and not 'h' in input1:
                    if len(input1) > 2:
                        if len(input1) == 3:
                            self.hr = int(input1[-3:-1]) * 24
                    elif len(input1) == 2:
                        self.hr = int(input1[-2:-1]) * 24
                if 'h' in input1 and not 'd' in input1:
                    # if len(input1) > 2:
                    #     if input1[-3] in numbers and input1[-2] in numbers:
                    #         self.hr = int(input1[-3:-1])
                    # elif input1[-2] in numbers:
                    #     self.hr = int(input1[-2:-1])
                    self.hr = int(input1[:-1])
            elif ":" in input1:
                if input1[0] == '-':
                    self.Positive = False
                    input1 = input1[1:]
                input1 = input1.split(":")
                for nums in input1:
                    if nums[0] == "0" and nums != "0":
                        nums = nums[1:]
                self.hr = int(input1[0])
                self.min = int(input1[1])
                self.sec = int(input1[2])
        elif isinstance(input1, int):
            if input2 == None and input3 == None:
                if input1 < 0:
                    self.Positive = False
                    input1 = abs(input1)
                self.hr = input1 // 3600
                input1 = input1 % 3600
                self.min = input1 // 60
                self.sec = input1 % 60
            else:
                if input1 < 0:
                    self.Positive = False
                self.hr = abs(input1)
                self.min = input2
                self.sec = input3


    def __str__(self) -> str:
        """
        >>> str(Duration('1s'))
        '0:00:01'
        >>> str(Duration('10s'))
        '0:00:10'
        >>> str(Duration('1m'))
        '0:01:00'
        >>> str(Duration('1d'))
        '24:00:00'
        >>> str(Duration('-1d'))
        '-24:00:00'
        >>> str(Duration('-2d30m2s'))
        '-48:30:02'
        >>> str(Duration('2h30m2s'))
        '2:30:02'
        >>> str(Duration('-2d2s'))
        '-48:00:02'
        >>> str(Duration('2h2s'))
        '2:00:02'
        >>> str(Duration('-2:00:00'))
        '-2:00:00'
        >>> str(Duration('1:01:01'))
        '1:01:01'
        >>> str(Duration('-1:1:1'))
        '-1:01:01'
        >>> str(Duration('1:0:1'))
        '1:00:01'
        >>> str(Duration('-0:00:01'))
        '-0:00:01'
        >>> str(Duration(1))
        '0:00:01'
        >>> str(Duration(60))
        '0:01:00'
        >>> str(Duration(3600))
        '1:00:00'
        >>> str(Duration(-1))
        '-0:00:01'
        >>> str(Duration(61))
        '0:01:01'
        >>> str(Duration(3661))
        '1:01:01'
        >>> str(Duration(1,1,1))
        '1:01:01'
        >>> str(Duration(32,12,44))
        '32:12:44'
        >>> str(Duration(12,0,0))
        '12:00:00'
        >>> str(Duration(1,0,1))
        '1:00:01'
        >>> str(Duration('34d'))
        '816:00:00'
        >>> str(Duration(-1, 2, 3))
        '-1:02:03'
        """
        if self.min in range(0,10):
            min = "0" + str(self.min)
        else:
            min = self.min
        if self.sec in range(0,10):
            sec = "0" + str(self.sec)
        else:
            sec = self.sec
        if self.Positive == False:
            sign = "-"
        else:
            sign = ""
        return f'{sign}{self.hr}:{min}:{sec}'
        # return ''
    
    def __repr__(self) -> str:
        """
        >>> repr(Duration(13, 13, 13))
        "Duration('13:13:13')"
        """
        return f"Duration('{str(self)}')"
        # return ''
    def flipSign(self):
        newSecs = ((self.hr * 3600) + (self.min * 60) + self.sec)
        if self.Positive == False:
            Flipped = Duration(newSecs)
        else:
            Flipped = Duration(-newSecs)
        return Flipped

    def __add__(self, other: 'Duration') -> "Duration":
        """
        >>> Duration(0:00:01) + Duration(0:00:01)
        '0:00:02'
        >>> Duration(-0:00:01) + Duration(0:00:01)
        '0:00:00'
        >>> Duration(0:00:01) + Duration(-0:00:01)
        '::'
        >>> Duration() + Duration()
        '::'
        >>> Duration() + Duration()
        '::'
        """
        if self.Positive == True and other.Positive == True or self.Positive == False and other.Positive == False:
            newTotalSec = ((self.hr * 3600) + (self.min * 60) + self.sec) + ((other.hr * 3600) + (other.min * 60) + other.sec)
            if self.Positive == False:
                NewDur = Duration(-newTotalSec)
            else:
                NewDur = Duration(newTotalSec)
            return NewDur
        if self.Positive == True and other.Positive == False:
            newTotalSec = ((self.hr * 3600) + (self.min * 60) + self.sec) - ((other.hr * 3600) + (other.min * 60) + other.sec)
            return Duration(newTotalSec)
        if self.Positive == False and other.Positive == True:
            newTotalSec = -((self.hr * 3600) + (self.min * 60) + self.sec) + ((other.hr * 3600) + (other.min * 60) + other.sec)
            return Duration(newTotalSec)
    def __sub__(self, other: 'Duration') -> "Duration":
        return self + other.flipSign()
    def __mul__(self, num):
        newSecs = ((self.hr * 3600) + (self.min * 60) + self.sec) * abs(num)
        if self.Positive == True and num < 0 or self.Positive == False and num > 0:
            return Duration(-newSecs)
        else:
            return Duration(newSecs)

    def __eq__(self, other) -> bool:
        if self.Positive == True and other.Positive == True:
            return ((self.hr * 3600) + (self.min * 60) + self.sec) == ((other.hr * 3600) + (other.min * 60) + other.sec)
        if self.Positive == False and other.Positive == False:
            return ((self.hr * 3600) + (self.min * 60) + self.sec) == ((other.hr * 3600) + (other.min * 60) + other.sec)
        else:
            return False
    def __ne__(self, other) -> bool:
        return not self == other
    def __gt__(self, other) -> bool:
        if self.Positive == True and other.Positive == True:
            return ((self.hr * 3600) + (self.min * 60) + self.sec) > ((other.hr * 3600) + (other.min * 60) + other.sec)
        if self.Positive == False and other.Positive == False:
            return ((self.hr * 3600) + (self.min * 60) + self.sec) < ((other.hr * 3600) + (other.min * 60) + other.sec)
        if self.Positive == False and other.Positive == True:
            return False
        if self.Positive == True and other.Positive == False:
            return True
    def __lt__(self, other) -> bool:
        return not self > other
    def __ge__(self, other) -> bool:
        return self > other or self == other
    def __le__(self, other) -> bool:
        return not self > other or self == other

if __name__ == "__main__":
    import doctest
    doctest.testmod()
    # print(Duration("-2d30m2s"))
    # print(Duration(3595, 0, 0) > Duration('4095h'))
    # print(Duration(-2822) * -2159)
    print(Duration(-1))