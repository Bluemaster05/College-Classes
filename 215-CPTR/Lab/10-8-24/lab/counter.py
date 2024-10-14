#Logan Gardner
#Base Ball Counter
#10-13-24 Started 
# Sources - Bounded Counter from 215 Lecture

from enum import Enum

#Bounded Counter from Class, NOT WRITEN BY ME -LG
class BoundedCounter:
    def __init__(self, lower_bound: int = 0, upper_bound: int = 9,
                 start_value: int = None, neighbor = None):
        self.lower_bound = lower_bound
        self.upper_bound = upper_bound
        self.current_value = lower_bound if start_value is None else start_value
        self.neighbor = neighbor
    def __repr__(self) -> str:
        """Returns a string that contains Python code to recreate this object.
        >>> BoundedCounter() # the shell calls repr when an expression returns an object
        BoundedCounter(0, 9, 0, None)
        >>> BoundedCounter(3, 5) # at the shell, expressions are surrounded by print(repr(expr))
        BoundedCounter(3, 5, 3, None)
        >>> repr(BoundedCounter(0, 1)) # calls BoundedCounter(0, 1).__repr__()
        'BoundedCounter(0, 1, 0, None)'
        """
        return f"BoundedCounter({self.lower_bound}, {self.upper_bound}, {self.current_value}, {self.neighbor!r})"
    def __str__(self) -> str:
        """Returns a human-readable representation of this object.
        >>> print(BoundedCounter()) # calls str(BoundedCounter()), which calls BoundedCounter().__str__()
        0
        >>> weird_counter = BoundedCounter(3, 7)
        >>> print(weird_counter)
        3
        """
        return ("" if self.neighbor is None else str(self.neighbor)) + str(self.current_value)
    def increment(self):
        """
        >>> bit = BoundedCounter(0, 1)
        >>> print(bit) # calls str(bit), which calls bit.__str__()
        0
        >>> bit.increment()
        >>> print(bit)
        1
        >>> bit.increment()
        >>> print(bit)
        0
        """
        self.current_value += 1
        if self.current_value > self.upper_bound:
            self.current_value = self.lower_bound
            if self.neighbor is not None:
                self.neighbor.increment()


class HalfInning(Enum):
    TOP = 0
    BOTTOM = 1

class BaseballCounter:
    def __init__(self, balls: int = 0, strikes: int = 0 , outs: int = 0, half: HalfInning = HalfInning.TOP, inning: int = 1) -> None:
        self.balls = balls
        self.strikes = strikes
        self.outs = outs
        self.half = half
        self.inning = inning
    def __repr__(self) -> str:
        return f'BaseballCounter({self.balls}, {self.strikes}, {self.outs}, {self.half}, {self.inning})'
    def __str__(self) -> str:
        ballstr = "ball" if self.balls == 1 else "balls"
        strikestr = "strike" if self.strikes == 1 else "strikes"
        

        pass
    def ball(self):
        self.balls += 1
        if self.ball >= 4:
            self.new_batter()
    def stike(self):
        self.strikes += 1
        if self.strikes >= 3:
            self.out()
            self.new_batter()
    def new_batter(self):
        self.balls = 0
        self.strikes = 0
    def out(self):
        self.outs += 1
        if self.outs >= 3:
            self.new_batter()
            if self.half == HalfInning.TOP:
                self.half = HalfInning.BOTTOM
            else:
                self.half = HalfInning.TOP
                self.inning += 1
    def new_game(self):
        self.__init__()


