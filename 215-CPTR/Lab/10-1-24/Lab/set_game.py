# Set Game
# Logan Gardner
# 2024-8-10 Created File and Started Functionality
# 2024-9-10 Finished Functionality, Started Tests
# 2024-10-10 Finalised Tests. Final Draft
# Sources -https://en.wikipedia.org/wiki/Set_(card_game), -https://www.setgame.com/set/puzzle

from enum import Enum
from random import shuffle

class Fill(Enum):
    EMPTY = 0
    SHADED = 1
    FILLED = 2
    
class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

class Shape(Enum):
    QUAD = 5
    OVAL = 17
    PYRAMID = 234

class SetCard:
    def __init__(self, number, fill, color, shape):
        '''int in [1,3], Fill, Color, Shape -> SetCard'''
        self.number = number
        self.fill = fill
        self.color = color
        self.shape = shape
        self.fillStr = Fill(self.fill).name
        self.colorStr = Color(self.color).name
        self.shapeStr = Shape(self.shape).name
        pass
    def __str__(self):
        '''Human-readable representation of this card.
        >>> str(SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL))
        '1SBO'
        >>> str(SetCard(2, Fill.EMPTY, Color.RED, Shape.QUAD))
        '2ERQ'
        >>> str(SetCard(3, Fill.EMPTY, Color.GREEN, Shape.QUAD))
        '3EGQ'
        >>> str(SetCard(2, Fill.FILLED, Color.RED, Shape.PYRAMID))
        '2FRP'
        '''
        outputString = ""
        outputString += str(self.number) + self.fillStr[0:1] + self.colorStr[0:1] + self.shapeStr[0:1]
        return outputString

    def __repr__(self):
        '''Python code to recreate this card.
        >>> SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL)
        SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL)
        >>> repr(SetCard(2,Fill.EMPTY,Color.RED,Shape.QUAD))
        'SetCard(2, Fill.EMPTY, Color.RED, Shape.QUAD)'
        >>> repr(SetCard(3,Fill.FILLED,Color.RED,Shape.QUAD))
        'SetCard(3, Fill.FILLED, Color.RED, Shape.QUAD)'
        '''
        representation = f"SetCard({self.number}, {str(self.fill)}, {str(self.color)}, {str(self.shape)})"
        return representation

    

    def third_card(self, other: "SetCard"):
        '''Returns the third card that makes a set with self and other.
        >>> card1 = SetCard(2, Fill.EMPTY, Color.RED, Shape.QUAD)
        >>> card2 = SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL)
        >>> print(card1.third_card(card2))
        3FGP
        >>> print(card2.third_card(card1))
        3FGP
        '''
        thirdNumber = third_value([1, 2 ,3], self.number, other.number)
        thirdFill = third_value(Fill, self.fill, other.fill)
        thirdColor = third_value(Color, self.color, other.color)
        thirdShape = third_value(Shape, self.shape, other.shape)

        card3 = SetCard(thirdNumber, thirdFill, thirdColor, thirdShape)
        return card3
        

def make_deck():
    '''Returns a list containing a complete Set deck with 81 unique cards.
    >>> thisDeck = make_deck()
    >>> len(thisDeck) == 81
    True
    >>> str(SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL)) in map(str, thisDeck)
    True
    >>> thisDeck = list(map(str, thisDeck))
    >>> thisDeck.pop(thisDeck.index(str(SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL))))
    '1SBO'
    >>> str(SetCard(1, Fill.SHADED, Color.BLUE, Shape.OVAL)) in thisDeck
    False
    
    '''
    cardDeck = []
    for num in range(1, 4):
        for fill in Fill:
            for color in Color:
                for shape in Shape:
                    cardDeck.append(SetCard(num, fill, color, shape))
    shuffle(cardDeck)
    return cardDeck

def is_set(card1: SetCard, card2: SetCard, card3: SetCard):
    '''Determines whether the 3 cards make a set.
    (For each of the 4 traits, all 3 cards are either the same, or all 3 are different.)
    >>> is_set(SetCard(1,Fill.EMPTY,Color.BLUE,Shape.OVAL),SetCard(2,Fill.SHADED,Color.BLUE,Shape.OVAL),SetCard(3,Fill.FILLED,Color.BLUE,Shape.OVAL))
    True
    >>> is_set(SetCard(1,Fill.SHADED,Color.BLUE,Shape.OVAL),SetCard(2,Fill.SHADED,Color.BLUE,Shape.OVAL),SetCard(3,Fill.FILLED,Color.BLUE,Shape.OVAL))
    False
    '''
    return str(card3) == str(card1.third_card(card2))

def third_value(valueList, value1, value2):
        """Returns what the thrid value would have to be to be in the set.
        >>> third_value(Color, Color.RED, Color.BLUE)
        <Color.GREEN: 2>
        >>> third_value([1, 2 ,3], 2, 3)
        1
        >>> third_value([1, 2 ,3], 2, 2)
        2
        >>> third_value(Color, Color.RED, Color.RED)
        <Color.RED: 1>
        >>> third_value(Fill, Fill.EMPTY, Fill.EMPTY)
        <Fill.EMPTY: 0>
        >>> third_value(Shape, Shape.OVAL, Shape.QUAD)
        <Shape.PYRAMID: 234>
        """
        if value1 == value2:
            return value1
        else:
            return (set(valueList) - set([value1, value2])).pop() 

if __name__ == "__main__":
    import doctest
    doctest.testmod()