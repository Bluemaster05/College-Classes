def romanFromInt(num: int) -> str:
    """Converts a number to its Roman numeral representation in standard form.
    >>> romanFromInt(3947)
    'MMMCMXLVII'
    >>> romanFromInt(7)
    'VII'
    >>> romanFromInt(34)
    'XXXIV'
    >>> romanFromInt(752)
    'DCCLII'
    >>> romanFromInt(3999)
    'MMMCMXCIX'
    >>> romanFromInt(3009)
    'MMMIX'
    >>> romanFromInt(0)
    ''
    """
    romanDict = {
        "ones": {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX"
        },
        "tens": {
            1: "X",
            2: "XX",
            3: "XXX",
            4: "XL",
            5: "L",
            6: "LX",
            7: "LXX",
            8: "LXXX",
            9: "XC"
        },
        "hundreds": {
            1: "C",
            2: "CC",
            3: "CCC",
            4: "CD",
            5: "D",
            6: "DC",
            7: "DCC",
            8: "DCCC",
            9: "CM"
        },
        "thousands": {
            1: "M",
            2: "MM",
            3: "MMM"
        }
    }
    if num == 0:
        return ''
    cyclesToUnits = ["ones","tens","hundreds","thousands"]
    conversionList = list(str(num))
    romanNumber = ""
    reversedConversion = list(reversed(conversionList))
    cycle = len(conversionList) - 1
    for nums in conversionList:
        if nums != '0':
            romanNumber += romanDict[cyclesToUnits[cycle]][int(nums)]
        cycle -= 1
    return romanNumber

def intFromRoman(num: str) -> int:
    """Converts a string representing a Roman numeral in standard form to its numeric equivalent.
    >>> intFromRoman('MMMCMXLVII')
    3947
    >>> intFromRoman('MMMV')
    3005
    >>> intFromRoman('I')
    1
    >>> intFromRoman('MMMCMXCIX')
    3999
    """
    romanDict = {
        "thousands": {
            "MMM": 3,
            "MM": 2,
            "M": 1
        },
        "hundreds": {
            "CM": 9,
            "DCCC": 8,
            "DCC": 7,
            "D": 5,
            "CD": 4,
            "DC": 6,
            "CCC": 3,
            "CC": 2,
            "C": 1
        },
        "tens": {
            "XC": 9,
            "LXXX": 8,
            "LXX": 7,
            "LX": 6,
            "L": 5,
            "XL": 4,
            "XXX": 3,
            "XX": 2,
            "X": 1
        },
        "ones": {
            "IX": 9,
            "VIII": 8,
            "VII": 7,
            "VI": 6,
            "V": 5,
            "IV": 4,
            "III": 3,
            "II": 2,
            "I": 1
        }
    }
    romanString = ""
    numStore = num
    numsAppended = 0
    placesList = []
    for i in range(4):
        for j in romanDict:
            for k in romanDict[j]:
                if num[:4] == k:
                    romanString += str(romanDict[j][k])
                    num = num.replace(str(list(romanDict[j].keys())[list(romanDict[j].values()).index(romanDict[j][k])]), "", 1)
                    numsAppended += 1
                    placesList.append(j)
                    break
                elif num[:3] == k:
                    romanString += str(romanDict[j][k])
                    num = num.replace(str(list(romanDict[j].keys())[list(romanDict[j].values()).index(romanDict[j][k])]), "", 1)
                    numsAppended += 1
                    placesList.append(j)
                    break
                elif num[:2] == k:
                    romanString += str(romanDict[j][k])
                    num = num.replace(str(list(romanDict[j].keys())[list(romanDict[j].values()).index(romanDict[j][k])]), "", 1)
                    numsAppended += 1
                    placesList.append(j)
                    break
                elif num[:1] == k:
                    romanString += str(romanDict[j][k])
                    num = num.replace(str(list(romanDict[j].keys())[list(romanDict[j].values()).index(romanDict[j][k])]), "", 1)
                    numsAppended += 1
                    placesList.append(j)
                    break
            if numStore != num:
                numStore = num
                break
    completePlaces = ["thousands","hundreds","tens","ones"]
    completePlaces = completePlaces[completePlaces.index(placesList[0]):]
    missingPlaces = [item for item in completePlaces if item not in placesList]
    number_list = list(romanString)
    for i in range(len(placesList)):
        completePlaces[completePlaces.index(placesList[i])] = number_list[i]
    for unit in completePlaces:
        if unit == "thousands" or unit == "hundreds" or unit == "tens" or unit == "ones":
            completePlaces[completePlaces.index(unit)] = "0"
    romanString = "".join(completePlaces)

    pass
    return int(romanString)

if __name__ == "__main__":

    # for i in range(100, 999):
    #     print(romanFromInt(i))
    
    import doctest
    doctest.testmod()
    calculation = input('+-×÷» ')
    while calculation != "":
        calculation = calculation.split()
        roman1 = calculation[0]
        operation = calculation[1]
        roman2 = calculation[2]
            
        output = ""
        if operation == "+":
            output = int(intFromRoman(roman1)) + int(intFromRoman(roman2))
            output = romanFromInt(output)
        elif operation == "-":
            output = int(intFromRoman(roman1)) - int(intFromRoman(roman2))
            output = romanFromInt(output)
        elif operation == "×" or operation == "*" or operation == "x" or operation == "∙":
            output = int(intFromRoman(roman1)) * int(intFromRoman(roman2))
            output = romanFromInt(output)
        elif operation == "÷" or operation == "/":
            output = int(intFromRoman(roman1)) // int(intFromRoman(roman2))
            output = romanFromInt(output)

        print(f'∎QEC: {output}')
        calculation = input('+-×÷» ')
