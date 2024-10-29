def gcd(num1, num2):
    while num2 != 0:
        hold = num2
        num2 = num1 % num2
        num1 = hold
    return num1

class Fraction():
    def __init__(self, num, den = 1):
        self.num = num // gcd(num, den)
        self.den = den // gcd(num, den)

    def __str__(self) -> str:
        """
        >>> str(Fraction(1,2))
        '1/2'
        >>> str(Fraction(2, 1))
        '2/1'
        """
        return f"{self.num}/{self.den}"

    def __repr__(self) -> str:
        """
        >>> repr(Fraction(2,1))
        'Fraction(2)'
        >>> repr(Fraction(3, 4))
        'Fraction(3, 4)'
        """
        if self.den == 1:
            return f"Fraction({self.num})"
        else:
            return f"Fraction({self.num}, {self.den})"

        
    #Comparison Operators [ == != < > <= > = ]
    def __eq__(self, other: "Fraction") -> bool:
        """
        >>> Fraction(1,2) == Fraction(1,2)
        True
        >>> Fraction(1,2) == Fraction(2,1)
        False
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        if selNum == othNum:
            return True
        else:
            return False

    def __ne__(self, other:  "Fraction") -> bool:
        """
        >>> Fraction(1,2) != Fraction(2,1)
        True
        >>> Fraction(1,2) != Fraction(1,2)
        False
        """
        if self == other:
            return False
        else:
            return  True
        
    def __lt__(self, other:  "Fraction") -> bool:
        """
        >>> Fraction(1,2) < Fraction(2,1)
        True
        >>> Fraction(2,1) < Fraction(1,2)
        False
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        if selNum < othNum:
            return True
        else:
            return False

    def __gt__(self, other:  "Fraction") -> bool:
        """
        >>> Fraction(1,2) > Fraction(2,1)
        False
        >>> Fraction(2,1) > Fraction(1,2)
        True
        """
        if self < other:
            return False
        else:
            return True
    def __ge__(self, other:  "Fraction") -> bool:
        """
        >>> Fraction(2,1) >= Fraction(1,2)
        True
        >>> Fraction(1,2) >= Fraction(1,2)
        True
        >>> Fraction(1,2) >= Fraction(2,1)
        False
        """
        if self > other or self == other:
            return True
        else:
            return False
    def __le__(self, other:  "Fraction") -> bool:
        """
        >>> Fraction(2,1) <= Fraction(1,2)
        False
        >>> Fraction(1,2) <= Fraction(1,2)
        True
        >>> Fraction(1,2) <= Fraction(2,1)
        True
        """
        if self < other or self == other:
            return True
        else:
            return False
    # [ + - * and / ]
    def __add__(self, other:  "Fraction"):
        """
        >>> Fraction(1,2) + Fraction(1,2)
        Fraction(1)
        >>> Fraction(1,4) + Fraction(3,4)
        Fraction(1)
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        newNum = selNum + othNum
        newDen = self.den * other.den
        return Fraction(newNum, newDen)
    def __sub__(self, other:  "Fraction"):
        """
        >>> Fraction(1,2) - Fraction(1,2)
        Fraction(0)
        >>> Fraction(1) - Fraction(1,2)
        Fraction(1, 2)
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        newNum = selNum - othNum
        newDen = self.den * other.den
        return Fraction(newNum, newDen)
    def __mul__(self, other:  "Fraction"):
        """
        >>> Fraction(1,2) * Fraction(1,2)
        Fraction(1, 4)
        >>> Fraction(1,2) * Fraction(2,1)
        Fraction(1)
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        bothDen = other.den * self.den
        newNum = selNum * othNum
        newDen = bothDen * bothDen
        return Fraction(newNum, newDen)
        
    def __truediv__(self, other:  "Fraction"):
        """
        >>> Fraction(1,2) / Fraction(1,2)
        Fraction(1)
        >>> Fraction(3,4) / Fraction(1,2)
        Fraction(3, 2)
        """
        selNum = self.num * other.den
        othNum = other.num * self.den
        bothDen = other.den * self.den
        newNum = selNum * bothDen
        newDen = bothDen * othNum
        return Fraction(newNum, newDen)

if __name__ == "__main__":
    import doctest
    doctest.testmod()