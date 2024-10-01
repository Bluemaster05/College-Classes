#Thermal Converter
# Logan Gardner
# 2024-10-1 Started and finished Final Draft
# Program that converts Temperature between 2 units of measure
# Sources: https://en.wikipedia.org/wiki/Conversion_of_scales_of_temperature


def fromCtoScale(scale, num):
    """ Converts unit in Celcuis to equivilant value in selected unit
    >>> fromCtoScale("C", 32.0)
    32.0
    >>> fromCtoScale("D", 32.0)
    102.0
    >>> fromCtoScale("F", 32.0)
    89.6
    >>> fromCtoScale("K", 32.0)
    305.15
    >>> fromCtoScale("N", 100.0)
    33.0
    >>> fromCtoScale("Ra", 32.0)
    549.27
    >>> fromCtoScale("Re", 32.0)
    25.6
    >>> fromCtoScale("Ro", 32.0)
    24.3
    """
    cToScale = {
        "C": lambda x : x,
        "D": lambda x : (100 - x) * (3/2),
        "F": lambda x : (x * (9/5)) + 32,
        "K": lambda x : x + 273.15,
        "N": lambda x : x * (33/100),
        "Ra": lambda x : (x + 273.15) * (9/5),
        "Re": lambda x : x * (4/5),
        "Ro": lambda x : (x * (21/40)) + 7.5
    }
    return(cToScale[scale](num))



def fromScaletoC(scale, num):
    """Converts unit in Celcuis to equivilant value in selected unit
    >>> fromScaletoC("C", 32.0)
    32.0
    >>> fromScaletoC("D", 102.0)
    32.0
    >>> fromScaletoC("F", 89.6)
    32.0
    >>> fromScaletoC("K", 305.15)
    32.0
    >>> fromScaletoC("N", 33.0)
    100.0
    >>> round(fromScaletoC("Ra", 549.27), 2)
    32.0
    >>> fromScaletoC("Re", 25.6)
    32.0
    >>> fromScaletoC("Ro", 24.3)
    32.0
    """
    scaleToC = {
        "C": lambda x : x,
        "D": lambda x : 100 - (x * (2/3)),
        "F": lambda x : (x - 32) * (5/9),
        "K": lambda x : x - 273.15,
        "N": lambda x : x * (100/33),
        "Ra": lambda x : (x - 491.67) * (5/9),
        "Re": lambda x : x * (5/4),
        "Ro": lambda x : (x - 7.5) * (40/21) 
    }
    return (scaleToC[scale](num))


if __name__ == "__main__":
    import doctest
    doctest.testmod()
    number = float(input("Temperature to convert: "))
    fromUnit = input("Starting scale (C, D, F, K, N, Ra, Re, Ro): ")
    toUnit = input("Target scale (C, D, F, K, N, Ra, Re, Ro): ")

    cUnit = fromScaletoC(fromUnit, number)
    changedUnit = fromCtoScale(toUnit, cUnit)
    textUnits = ["C","D","F","K","N","Ra","Re","Ro"]
    unitList = ["°C","°D","°F","K","°N","°Ra","°Re","°Ro"]
    print(f'\n{number:.2f}{unitList[textUnits.index(fromUnit)]} = {changedUnit:.2f}{unitList[textUnits.index(toUnit)]}')