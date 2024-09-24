"""Sliding Puzzle
Prof. O and _____
2021-09-16 first draft

A Sliding Puzzle is represented by a string
whose length is a perfect square
of an integer in [2, 6] (i.e., 4, 9, 16, 25, or 36).
It contains only digits (0-9) and capital letters (A-Z),
exactly ONE of which (typically 0) is "empty"
and is represented by a hyphen (-).

On screen, however, the layout is an NxN square.
Legal moves consist of sliding a tile
up, down, left, or right (but never diagonally)
into the empty spot (-).

The puzzle is in the "solved" state when
all its digits and letters are in ascending order
(with digits before letters, as in ASCII and Unicode)
and the empty spot is at the beginning or end
(never in the middle).

References:
https://mathworld.wolfram.com/15Puzzle.html
https://lorecioni.github.io/fifteen-puzzle-game/
https://15puzzle.netlify.app/
"""

from typing import Tuple
from math import sqrt
def rows_from_puzzle(puzzle : str) -> str:
    """Returns a string with a newline between rows of the puzzle.
    """
    numRows = sqrt(len(puzzle))
    puzzle = list(puzzle)
    puzzleprint = ""
    rowlimit = 0
    iteration = 0
    for item in puzzle:
        if iteration == len(puzzle) - 1:
            puzzleprint += item
        elif rowlimit < numRows - 1:
            puzzleprint += item 
            iteration += 1
            rowlimit += 1
        elif rowlimit == numRows - 1:
            puzzleprint += item + "\n"
            iteration += 1
            rowlimit = 0
    return puzzleprint # DONE

def is_solved(puzzle : str) -> bool:
    """Determines whether puzzle is solved (as defined above).
    """
    puzzle = list(puzzle)
    for index in range(len(puzzle) - 1):
        if puzzle[index] > puzzle[index + 1]:
            return False
    return True # Done

def is_legal_move(puzzle : str, tile_to_move : str) -> bool:
    """Determines whether it is possible to move tile_to_move into the empty spot.
    """
    numRows = int(sqrt(len(puzzle)))
    puzzle = list(puzzle)
    puzzle3d = []
    puzzleindex = 0
    for index in range(numRows):
        newline = []
        for index2 in range(numRows):
            newline.append(puzzle[puzzleindex])
            puzzleindex += 1
        puzzle3d.append(newline)
    rowindex = 0
    for row in puzzle3d:
        if "-" in row:
            rowindex = puzzle3d.index(row)
    colindex = puzzle3d[rowindex].index("-")
    
    possibleSolutions = []
    for item in puzzle3d[rowindex]:
        if colindex == 0:
            if item == puzzle3d[rowindex][colindex + 1]:
                possibleSolutions.append(item)
        elif colindex == numRows - 1:
            if item == puzzle3d[rowindex][colindex - 1]:
                possibleSolutions.append(item)
        else:
            if item == puzzle3d[rowindex][colindex + 1] or item == puzzle3d[rowindex][colindex - 1]:
                possibleSolutions.append(item)
    colList = []
    for i in range(numRows):
        colList.append(puzzle3d[i][colindex])
    for item in colList:
        if rowindex == 0:
            if item == puzzle3d[rowindex + 1][colindex]:
                possibleSolutions.append(item)
        elif rowindex == numRows - 1:
            if item == puzzle3d[rowindex - 1][colindex]:
                possibleSolutions.append(item)
        else:
            if item == puzzle3d[rowindex + 1][colindex] or item == puzzle3d[rowindex - 1][colindex]:
                possibleSolutions.append(item)
    if tile_to_move in possibleSolutions:
        return True

    return False #Done

def puzzle_with_move(puzzle : str, tile_to_move : str) -> str:
    puzzleList = list(puzzle)
    indexDash, indexTile = puzzleList.index('-'), puzzleList.index(tile_to_move)
    puzzleList[indexDash], puzzleList[indexTile] = puzzleList[indexTile], puzzleList[indexDash]
    
    puzzle = "".join(puzzleList)
    return puzzle # TODO: write tests and replace this stub

def space_puzzle(puzzle : str) -> str:
    return " " + " ".join(rows_from_puzzle(puzzle))

def play_puzzle(puzzle : str) -> None:
    moves = 0
    while not is_solved(puzzle):
        print(f"\nCurrent puzzle state:\n{space_puzzle(puzzle)}")
        tile_to_move = "-"
        moves += 1
        print(f"Move #{moves}")
        while not is_legal_move(puzzle, tile_to_move):
            tile_to_move = input("Which tile would you like to move into the empty spot? ")        
        puzzle = puzzle_with_move(puzzle, tile_to_move)
    print(f"\nSolved!\n{space_puzzle(puzzle)}")
    print(f"You solved the puzzle in {moves} moves!")

if __name__ == "__main__":
    import doctest
    doctest.testmod()
    
    # play_puzzle("1-23")
    print(is_solved("-123"))