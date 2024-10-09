from random import shuffle

class UnoCard:
    def __init__(self, color, rank):
        """Takes any from "RGBYK" for color and "0-9, S, D, R, W, F"
        """
        self.color = color
        self.rank = rank

    def can_be_played_on(self, other: "UnoCard"):
        if self.color == "K" or other.color == "K" or self.color == other.color or self.rank == other.rank:
            return True
        else:
            return False

    def score_value(self):
        scoreRanks = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        twentyRanks = ["S", "D", "R"]
        fiftyRanks = ["W", "F"]
        if self.rank in scoreRanks:
            return int(self.rank)
        if self.rank in twentyRanks:
            return 20
        if self.rank in fiftyRanks:
            return 50

    def __str__(self) -> str:
        return f"{self.color}{self.rank}"

    def __repr__(self) -> str:
        return f"UnoCard('{self.color}', '{self.rank}')"

def create_deck():
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
 

def deal_hands(deck, numhands):
    decks = []
    for i in range(numhands):
        decks.append([])
    for j in range(7):    
        for cardDeck in decks:
            cardDeck.append(deck.pop(0))
    return tuple(decks)


def hand_score(hand: list[UnoCard]):
    totalScore = 0
    for card in hand:
        totalScore += card.score_value()
    return totalScore
