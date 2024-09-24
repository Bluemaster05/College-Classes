# Words From Number
# Logan Gardner
# 2021-09-24 Final Draft
# Function that turns a number you input into it into words that represent that number in a string


def wordsFromNumber(number: int) -> str:
    """ Takes number as a parameter and returns that number as a string
        For example 1 => one, 130000 => One hundred and thirty thousand
    >>> wordsFromNumber(551235)
    'five hundred fifty-one thousand two hundred thirty-five'
    >>> wordsFromNumber(94214047779337523338)
    'ninety-four quintillion two hundred fourteen quadrillion forty-seven trillion seven hundred seventy-nine billion three hundred thirty-seven million five hundred twenty-three thousand three hundred thirty-eight'
    >>> wordsFromNumber(7303000317656860625)
    'seven quintillion three hundred three quadrillion three hundred seventeen billion six hundred fifty-six million eight hundred sixty thousand six hundred twenty-five'
    >>> wordsFromNumber(0)
    'zero'
    >>> wordsFromNumber(12)
    'twelve'
    >>> wordsFromNumber(21)
    'twenty-one'
    >>> wordsFromNumber(113)
    'one hundred thirteen'
    """
    if number == 0:
        return "zero"
    numberNamesBig = ["", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "octillion"]
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
                    # if bigNumber[bigNumber.index(num) + 1] == "000":
                    #     outputNumber += " " + numberNamesBig[numberNamesBigIndex - 1]
                    # else:
                    outputNumber += " " + numberNamesBig[numberNamesBigIndex - 1] + " "
                else:
                    outputNumber += " "
        numberNamesBigIndex -= 1
    return outputNumber.rstrip()

    # print(bigNumber)
def threeDigitWordToNumber(number: int) -> str:
    """ Takes a numbers limited to 3 digits and returns that number in words
    >>> threeDigitWordToNumber(123)
    'one hundred twenty-three'
    >>> threeDigitWordToNumber(103)
    'one hundred three'
    >>> threeDigitWordToNumber(700)
    'seven hundred'
    >>> threeDigitWordToNumber(1)
    'one'
    >>> threeDigitWordToNumber(10)
    'ten'
    >>> threeDigitWordToNumber(23)
    'twenty-three'
    """
    numList = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    lessThanTwentieList = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    overTwentieList = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",]
    numString = ""
    if len(str(number)) == 3:
        numString += numList[int(str(number)[0:1])]
        if str(number)[1:] == "00":
            numString += " hundred"
        else:
            numString += " hundred " 
        if int(removeTrailingZeros(str(number)[1:])) < 20:
            if int(removeTrailingZeros(str(number)[1:])) < 10:
                numString += numList[int(str(number)[2:])]
            else:
                numString += lessThanTwentieList[int(str(number)[1:])  - 10]
        elif int(str(number)[1:]) >= 20:
            numString +=  overTwentieList[int(str(number)[1:2]) -2]
            if int(str(number)[2:]) != 0:
                numString += "-" + numList[int(str(number)[2:])]
    if len(str(number)) == 2:
        if number < 20:
            numString += lessThanTwentieList[number - 10]
        elif number >= 20:
            # if int(str(number)[1:]) == 0:
            numString +=  overTwentieList[int(str(number)[0:1]) -2]
            if int(str(number)[1:]) != 0:
                numString += "-" + numList[int(str(number)[1:])]
    if len(str(number)) == 1:
        numString += numList[number]
    if len(str(number)) == 0:
        pass
    return numString
    
def removeTrailingZeros(number: str) -> str:
    """Removes trailing zeros from the beginning of a string but leaves one zero if all the numbers in the string are zero
    >>> removeTrailingZeros("010")
    '10'
    >>> removeTrailingZeros("000")
    '0'
    >>> removeTrailingZeros("001")
    '1'
    >>> removeTrailingZeros("100")
    '100'
    """
    if number == "000" or number == "00" or number == "0":
        number = "0"
    else:
        number = number.lstrip("0")
    return number

if __name__ == "__main__":
    import doctest
    doctest.testmod()

    # print(wordsFromNumber(52088186046419700904))
    # print(wordsFromNumber(700904))
    # print(threeDigitWordToNumber(620))
    print(removeTrailingZeros("010"))