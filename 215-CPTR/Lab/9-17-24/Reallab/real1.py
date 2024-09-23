def wordsFromNumber(number: int):
    """ Takes number as a parameter and returns that number as a string
        For example 1 => one, 130000 => One hundred and thirty thousand
    >>> wordsFromNumber(1)
    "one"
    >>> wordsFromNumber(123456)
    "One hundred twentie three thousand four hundred fifty six"
    """
    if number == 0:
        return "zero"
    numberNamesBig = ["", "thousand", "Million", "Billion", "Trilion", "Quadrilian", "Quintillian", "sextillian", "octillion"]
    listNumber = list(str(number))
    bigNumber = []
    limitThree = 0
    pos = 0
    if len(listNumber) % 3 != 0:
        limit = len(listNumber) % 3
    else:
        limit = 3
    for i in range(len(listNumber)):
        if limitThree < 1:
            bigNumber.append(listNumber.pop(0))
            limitThree += 1
        elif limitThree < limit:
            bigNumber[pos] += listNumber.pop(0)
            limitThree += 1
        elif limitThree == limit:
            bigNumber.append(listNumber.pop(0))
            pos += 1
            limitThree = 1
            limit = 3
    startNum = len(bigNumber) - 1
    outputNumber = ""
    numberNamesBigIndex = len(bigNumber)
    for num in bigNumber:
        if removeTrailingZeros(num) != "0":
            outputNumber += threeDigitWordToNumber(int(removeTrailingZeros(num)))
            if numberNamesBigIndex - 1 != 0:
                if threeDigitWordToNumber(int(removeTrailingZeros(num))) != 0:
                    outputNumber += " " + numberNamesBig[numberNamesBigIndex - 1] + " "
                else:
                    outputNumber += " "
        numberNamesBigIndex -= 1
    return outputNumber

    # print(bigNumber)
def threeDigitWordToNumber(number: int):
    numList = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    lessThanTwentieList = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    overTwentieList = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",]
    numstring = ""
    if len(str(number)) == 3:
        numstring += numList[int(str(number)[0:1])]
        numstring += " hundred " 
        if int(str(number)[1:]) < 20:
            numstring += lessThanTwentieList[int(str(number)[1:])  - 10]
        elif int(str(number)[1:]) > 20:
            # if int(str(number)[1:]) == 0:
            numstring +=  overTwentieList[int(str(number)[1:2]) -2]
            if int(str(number)[2:]) != 0:
                numstring += "-" + numList[int(str(number)[2:])]
    if len(str(number)) == 2:
        if number < 20:
            numstring += lessThanTwentieList[number - 10]
        elif number > 20:
            # if int(str(number)[1:]) == 0:
            numstring +=  overTwentieList[int(str(number)[0:1]) -2]
            if int(str(number)[1:]) != 0:
                numstring += "-" + numList[int(str(number)[1:])]
    if len(str(number)) == 1:
        numstring += numList[number]
    if len(str(number)) == 0:
        pass
    return numstring
    
def removeTrailingZeros(number: str):
    if number == "000" or number == "00" or number == "0":
        number = "0"
    else:
        number.strip("0")
    return number

if __name__ == "__main__":
    # import doctest
    # doctest.testmod()

    print(wordsFromNumber(270844))