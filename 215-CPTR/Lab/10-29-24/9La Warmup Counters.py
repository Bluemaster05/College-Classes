# Logan Gardner, Worked with Noah, Micah

class BoundedCounter():
    def __init__(self, low: int, high: int, start: int, neigh: 'BoundedCounter') -> None:
        self.lowerbound = low
        self.upper_bound = high
        current_value = start
        neighbor = neigh
    def __repr__(self) -> str:
        pass
    def __str__(self) -> str:
        pass

class ListCounter(BoundedCounter):
    def __init__(self, items: list) -> None:
        self.items = items

    def __repr__(self) -> str:
        pass

class BaseballCounter():
    def __init__(self) -> None:
        self.balls = BoundedCounter(0,3,0,self.strikes)
        self.strikes = BoundedCounter(0, 2, 0, self.balls)
        self.outs = BoundedCounter(0, 2, 0, self.half_inning)
        self.half_inning = ListCounter(['First', 'Last'])
        self.inning = 0
    def ball(self):
        pass
    def strike(self):
        pass
    def out(self):
        pass
    def new_batter(self):
        pass
    def new_game(self):
        pass