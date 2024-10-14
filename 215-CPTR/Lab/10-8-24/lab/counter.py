#Logan Gardner
#Base Ball Counter
#10-13-24 Started 
#10-14-24 Finished Spine
# Sources - Bounded Counter from 215 Lecture

from enum import Enum

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
        """Creates Python-readable representation of Baseball counter that can be used to recreate the object
        >>> repr(BaseballCounter(1, 2, 2, HalfInning.BOTTOM, 1))
        'BaseballCounter(1, 2, 2, HalfInning.BOTTOM, 1)'
        >>> repr(BaseballCounter(0, 0, 2, HalfInning.TOP, 5))
        'BaseballCounter(0, 0, 2, HalfInning.TOP, 5)'
        """
        return f'BaseballCounter({self.balls}, {self.strikes}, {self.outs}, {self.half}, {self.inning})'
    def __str__(self) -> str:
        """Creates a human-readable representation of the Baseball counter
        >>> str(BaseballCounter(1, 1, 1, HalfInning.BOTTOM, 1))
        '1 ball, 1 strike, 1 out, bottom of the 1st inning'
        >>> str(BaseballCounter(2, 2, 2, HalfInning.TOP, 2))
        '2 balls, 2 strikes, 2 outs, top of the 2nd inning'
        >>> str(BaseballCounter(3, 2, 2, HalfInning.TOP, 3))
        '3 balls, 2 strikes, 2 outs, top of the 3rd inning'
        >>> str(BaseballCounter(3, 2, 2, HalfInning.TOP, 4))
        '3 balls, 2 strikes, 2 outs, top of the 4th inning'
        """
        ballstr = "ball" if self.balls == 1 else "balls"
        strikestr = "strike" if self.strikes == 1 else "strikes"
        outstr = "out" if self.outs == 1 else "outs"
        halfstr = "bottom" if self.half == HalfInning.BOTTOM else "top"
        stNdRdTh = "N/A st nd rd th th th th th th th th th th".split()
        return f"{self.balls} {ballstr}, {self.strikes} {strikestr}, {self.outs} {outstr}, {halfstr} of the {self.inning}{stNdRdTh[self.inning]} inning"
    def ball(self):
        """Adds a ball to the counter, after 4 balls a new batter is up and balls and strikes are reset
        >>> bc = BaseballCounter(1, 1, 1, HalfInning.TOP, 1)
        >>> bc.ball()
        >>> repr(bc)
        'BaseballCounter(2, 1, 1, HalfInning.TOP, 1)'
        >>> bc.ball()
        >>> bc.ball()
        >>> repr(bc)
        'BaseballCounter(0, 0, 1, HalfInning.TOP, 1)'
        """
        self.balls += 1
        if self.balls >= 4:
            self.new_batter()
    def strike(self):
        """Adds a strike to the counter, 3rd strike increments out and a new batter is up.
        """
        self.strikes += 1
        if self.strikes >= 3:
            self.out()
            self.new_batter()
    def new_batter(self):
        """Resets the ball count and strike count
        """
        self.balls = 0
        self.strikes = 0
    def out(self):
        """Adds an out to the counter. 3rd out resets out, new batter walks up, and halfInning switches.
        """
        self.outs += 1
        if self.outs >= 3:
            self.new_batter()
            self.outs = 0
            if self.half == HalfInning.TOP:
                self.half = HalfInning.BOTTOM
            else:
                self.half = HalfInning.TOP
                self.inning += 1
    def new_game(self):
        """ Calls constructor with default parameters to reset the game
        """
        self.__init__()

if __name__ == "__main__":
    import doctest
    doctest.testmod()
    
