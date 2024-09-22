import doctest

def isStrictlyIncreasing(numsList: list):
    """
    >>> isStrictlyIncreasing([1,2,3,4,5,6])
    True
    >>> isStrictlyIncreasing([6,5,4,3,2,1])
    False
    >>> isStrictlyIncreasing([1,2,6,5,3,4])
    False
    >>> isStrictlyIncreasing([0,1,2,3,4,5])
    True
    """
    # print(len(numsList))
    for i in range(len(numsList) - 1):
        if numsList[i] >= numsList[i + 1]:
            return False
    return True
        

if __name__ == "__main__":
    doctest.testmod()  
    # isStrictlyIncreasing([1,2,6,5,3,4])