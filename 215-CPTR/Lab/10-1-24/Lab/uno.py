# Uno Game
# Logan Gardner
# 2024-9-10 Created File and Completed Functionality
# 2024-10-10 Created and Ran test. Final Draft
# Sources -https://www.setgame.com/set/puzzle

from random import shuffle

class UnoCard:
    def __init__(self, color, rank):
        """Takes any from "RGBYK" for color and "0-9, S, D, R, W, F"
        """
        self.color = color
        self.rank = rank

    def can_be_played_on(self, other: "UnoCard"):
        """Checks if card other can be played on card self. Returns Boolean Expression
        >>> card1 = UnoCard("K", "W")
        >>> card2 = UnoCard("K", "F")
        >>> card3 = UnoCard("Y", "5")
        >>> card4 = UnoCard("B", "S")
        >>> card5 = UnoCard("B", "5")
        >>> card1.can_be_played_on(card2)
        True
        >>> card1.can_be_played_on(card3)
        True
        >>> card4.can_be_played_on(card3)
        False
        >>> card5.can_be_played_on(card3)
        True
        
        """
        return self.color == "K" or other.color == "K" or self.color == other.color or self.rank == other.rank

    def score_value(self):
        """ Returns the score value of the card
        >>> card1 = UnoCard("K", "W")
        >>> card2 = UnoCard("K", "F")
        >>> card3 = UnoCard("Y", "0")
        >>> card4 = UnoCard("B", "1")
        >>> card5 = UnoCard("B", "2")
        >>> card6 = UnoCard("B", "3")
        >>> card7 = UnoCard("B", "4")
        >>> card8 = UnoCard("B", "5")
        >>> card9 = UnoCard("B", "6")
        >>> card10 = UnoCard("B", "7")
        >>> card11 = UnoCard("B", "8")
        >>> card12 = UnoCard("B", "9")
        >>> card13 = UnoCard("B", "S")
        >>> card14 = UnoCard("B", "D") 
        >>> card1.score_value()
        50
        >>> card2.score_value()
        50
        >>> card3.score_value()
        0
        >>> card4.score_value()
        1
        >>> card5.score_value()
        2
        >>> card6.score_value()
        3
        >>> card7.score_value()
        4
        >>> card8.score_value()
        5
        >>> card9.score_value()
        6
        >>> card10.score_value()
        7
        >>> card11.score_value()
        8
        >>> card12.score_value()
        9
        >>> card13.score_value()
        20
        >>> card14.score_value()
        20
        """
        scoreRanks = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        twentyRanks = ["S", "D", "R"]
        fiftyRanks = ["W", "F"]
        if self.rank in scoreRanks:
            return int(self.rank)
        if self.rank in twentyRanks:
            return 20
        if self.rank in fiftyRanks:
            return 50
        return 0

    def __str__(self) -> str:
        """Returns a human-readable string representation of the card
        >>> str(UnoCard("K","W"))
        'KW'
        >>> str(UnoCard("B","5"))
        'B5'
        >>> str(UnoCard("Y","4"))
        'Y4'
        >>> str(UnoCard("G","S"))
        'GS'
        """
        return f"{self.color}{self.rank}"

    def __repr__(self) -> str:
        """Returns a python-readable string representation that can be used to recreate the card
        >>> repr(UnoCard("B", "S"))
        "UnoCard('B', 'S')"
        >>> repr(UnoCard("K", "W"))
        "UnoCard('K', 'W')"
        >>> repr(UnoCard("R", "R"))
        "UnoCard('R', 'R')"
        """
        return f"UnoCard('{self.color}', '{self.rank}')"

def create_deck():
    """Create a Full Uno deck and shuffles it
    >>> mydeck = create_deck()
    >>> str(UnoCard('R', '1')) in map(str, mydeck)
    True
    >>> str(UnoCard('K', 'W')) in map(str, mydeck)
    True
    >>> len(mydeck) == 108
    True
    >>> mydeck = list(map(str, mydeck))
    >>> mydeck.pop(mydeck.index("B1"))
    'B1'
    >>> "B1" in mydeck
    True
    """
    standardRanks = "1 2 3 4 5 6 7 8 9 S D R".split(" ")
    standardColors = "R G B Y".split(" ")
    blackRanks = ["W", "F"]
    deck = []
    for i in range(2):
        for rank in standardRanks:
            for color in standardColors:
                deck.append(UnoCard(color, rank))
    for color in standardColors:
        deck.append(UnoCard(color, "0"))
    for rank in blackRanks:
        for i in range(4):
            deck.append(UnoCard("K", rank))
    shuffle(deck)
    return deck 
 

def deal_hands(deck, numHands):
    """Takes a deck and distributes 7 cards for each hand into a list of lists, the cards are distibuted so that they.
    >>> deck1 = [UnoCard('B', '1'),UnoCard('B', '2'),UnoCard('B', '3'),UnoCard('B', '4'),UnoCard('B', '5'),UnoCard('B', '6'),UnoCard('B', '7'),UnoCard('B', '8'),UnoCard('B', '9'),UnoCard('Y', '1'),UnoCard('Y', '2'),UnoCard('Y', '3'),UnoCard('Y', '4'),UnoCard('Y', '5')]
    >>> deal_hands(deck1 , 2)
    ([UnoCard('B', '1'), UnoCard('B', '3'), UnoCard('B', '5'), UnoCard('B', '7'), UnoCard('B', '9'), UnoCard('Y', '2'), UnoCard('Y', '4')], [UnoCard('B', '2'), UnoCard('B', '4'), UnoCard('B', '6'), UnoCard('B', '8'), UnoCard('Y', '1'), UnoCard('Y', '3'), UnoCard('Y', '5')])
    >>> newestDeck = create_deck()
    >>> tuple(map(len ,deal_hands(newestDeck, 3)))
    (7, 7, 7)
    >>> len(newestDeck)
    87
    >>> len(deal_hands(create_deck(), 3))
    3
    """
    decks = []
    for i in range(numHands):
        decks.append([])
    for j in range(7):    
        for cardDeck in decks:
            cardDeck.append(deck.pop(0))
    return tuple(decks)


def hand_score(hand: list[UnoCard]):
    """Returns the total score of the cards in a hand
    >>> hand_score([UnoCard("B", "5"), UnoCard("B", "2"), UnoCard("G", "3")])
    10
    >>> hand_score([UnoCard("B", "S"), UnoCard("K", "W"), UnoCard("G", "3")])
    73
    """
    totalScore = 0
    for card in hand:
        totalScore += card.score_value()
    return totalScore

if __name__ == "__main__":
    import doctest
    doctest.testmod()
