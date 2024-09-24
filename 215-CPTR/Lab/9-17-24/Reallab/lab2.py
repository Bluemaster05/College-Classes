"""Sliding Puzzle
Prof. O and Logan
2021-09-24 Final Draft

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

rootdict = {
    "36": 6,
    "25": 5,
    "16": 4,
    "9": 3,
    "4": 2
}

def rows_from_puzzle(puzzle : str) -> str:
    r"""Returns a string with a newline between rows of the puzzle.
    >>> rows_from_puzzle("1-23")
    '1-\n23'
    >>> rows_from_puzzle("-123")
    '-1\n23'
    >>> rows_from_puzzle("-12345678")
    '-12\n345\n678'
    >>> rows_from_puzzle("-FEDCBA987654321")
    '-FED\nCBA9\n8765\n4321'
    """
    numRows = rootdict[str(len(puzzle))]
    puzzleList = list(puzzle)
    puzzlePrint = ""
    rowlimit = 0
    iteration = 0
    for item in puzzle:
        if iteration == len(puzzleList) - 1:
            puzzlePrint += item
        elif rowlimit < numRows - 1:
            puzzlePrint += item 
            iteration += 1
            rowlimit += 1
        elif rowlimit == numRows - 1:
            puzzlePrint += item + "\n"
            iteration += 1
            rowlimit = 0
    return puzzlePrint 

def is_solved(puzzle : str) -> bool:
    """Determines whether puzzle is solved (as defined above).
    >>> is_solved("-123")
    True
    >>> is_solved("123-")
    True
    >>> is_solved("-12345678")
    True
    >>> is_solved("1-23")
    False
    >>> is_solved("12345678-")
    True
    >>> is_solved("-ABCDEF123456789")
    False
    """
    puzzleList = list(puzzle)
    if puzzleList[0] == '-':
        puzzleIndex = 1
        for item in range(len(puzzleList[1:]) - 1):
            if puzzleList[puzzleIndex] > puzzleList[ puzzleIndex + 1]:
                return False
            puzzleIndex += 1
        return True
    elif puzzleList[len(puzzleList) - 1] == "-":
        puzzleIndex = 0
        for item in range(len(puzzleList[:-1]) - 1):
            if puzzleList[puzzleIndex] > puzzleList[ puzzleIndex + 1]:
                return False
            puzzleIndex += 1
        return True
    else:
        return False

def is_legal_move(puzzle : str, tile_to_move : str) -> bool:
    """Determines whether it is possible to move tile_to_move into the empty spot.
    >>> is_legal_move("1-23", "2")
    False
    >>> is_legal_move("-123", "1")
    True
    >>> is_legal_move("-123", "2")
    True
    >>> is_legal_move("-123", "3")
    False
    >>> is_legal_move("123-", "3")
    True
    >>> is_legal_move("1928-3746", "3")
    True
    >>> is_legal_move("1928-3746", "8")
    True
    >>> is_legal_move("1928-3746", "9")
    True
    >>> is_legal_move("1928-3746", "4")
    True
    >>> is_legal_move("1928-3746", "1")
    False
    >>> is_legal_move("1928-3746", "6")
    False
    """
    numRows = int(rootdict[str(len(puzzle))])
    puzzleList = list(puzzle)
    puzzle3D = []
    puzzleIndex = 0
    # Map puzzle string into Nested List
    for index in range(numRows):
        newline = []
        for index2 in range(numRows):
            newline.append(puzzleList[puzzleIndex])
            puzzleIndex += 1
        puzzle3D.append(newline)
    rowindex = 0
    #Find "-" Column and Row index in the Nested List
    for row in puzzle3D:
        if "-" in row:
            rowindex = puzzle3D.index(row)
    colindex = puzzle3D[rowindex].index("-")
    possibleMoves = []
    #Determine all possible moves 
    for item in puzzle3D[rowindex]:
        if colindex == 0:
            if item == puzzle3D[rowindex][colindex + 1]:
                possibleMoves.append(item)
        elif colindex == numRows - 1:
            if item == puzzle3D[rowindex][colindex - 1]:
                possibleMoves.append(item)
        else:
            if item == puzzle3D[rowindex][colindex + 1] or item == puzzle3D[rowindex][colindex - 1]:
                possibleMoves.append(item)
    colList = []
    for i in range(numRows):
        colList.append(puzzle3D[i][colindex])
    for item in colList:
        if rowindex == 0:
            if item == puzzle3D[rowindex + 1][colindex]:
                possibleMoves.append(item)
        elif rowindex == numRows - 1:
            if item == puzzle3D[rowindex - 1][colindex]:
                possibleMoves.append(item)
        else:
            if item == puzzle3D[rowindex + 1][colindex] or item == puzzle3D[rowindex - 1][colindex]:
                possibleMoves.append(item)
    if tile_to_move in possibleMoves:
        return True
    return False 

def puzzle_with_move(puzzle : str, tile_to_move : str) -> str:
    """Switches position of the tile_to_move with the "-" in the puzzle
    >>> puzzle_with_move("-123", "1")
    '1-23'
    >>> puzzle_with_move("-123", "2")
    '21-3'
    >>> puzzle_with_move("-123", "2")
    '21-3'
    >>> puzzle_with_move("12345-678", "8")
    '12345867-'
    """
    
    puzzleList = list(puzzle)
    indexDash, indexTile = puzzleList.index('-'), puzzleList.index(tile_to_move)
    puzzleList[indexDash], puzzleList[indexTile] = puzzleList[indexTile], puzzleList[indexDash]
    
    puzzle = "".join(puzzleList)
    return puzzle 

def space_puzzle(puzzle : str) -> str:
    r"""Returns the puzzle with spacing for display
    >>> space_puzzle("1-23")
    ' 1 - \n 2 3'
    >>> space_puzzle("1-23456789ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    ' 1 - 2 3 4 5 \n 6 7 8 9 A B \n C D E F G H \n I J K L M N \n O P Q R S T \n U V W X Y Z'
    """
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
    # print(space_puzzle("1-23"))