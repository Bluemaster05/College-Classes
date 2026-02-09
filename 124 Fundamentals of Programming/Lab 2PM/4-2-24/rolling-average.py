from plotter import Plotter


def read_data(filename: str) -> list[int]:
     f = open('covid.txt', 'r')
     new_list = []
     for line in f:
          new_list.append(int(line))
     return new_list

def rolling_average(a: list[int]) -> list[int]:
    rolled_list = []
    timesIterated = 0
    times_to_loop = len(a) - 4
    for ii in range(times_to_loop):
        repeating_index_cycle = 0
        average = 0
        for i in range(5):
            average += a[timesIterated + repeating_index_cycle]
            repeating_index_cycle += 1
        average = round(average / 5, 0)
        rolled_list.append(int(average))
        timesIterated += 1
    return rolled_list

# print(rolling_average(read_data('covid.txt')))

plotter = Plotter()                      # Create a new plotter object
plotter.new(read_data('covid.txt'), 50, 50, 400, 200)      # Create a plot of the original data
plotter.new(rolling_average(read_data('covid.txt')), 50, 325, 400, 200) # Create a plot of the rolling average
plotter.plot()