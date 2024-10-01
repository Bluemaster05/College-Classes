def fromCtoScale(scale, num):
    cToScale = {
        "C": lambda x : x,
        "D": lambda x : (100 - x) * (3/2),
        "F": lambda x : (x * (5/9)) + 32,
        "K": lambda x : x + 273.15,
        "N": lambda x : x * (33/100),
        "Ra": lambda x : (x + 273.15) * (9/5),
        "Re": lambda x : (x - 32) * (4/9),
        "Ro": lambda x : (x * (21/40)) + 7.5
    }
    return(cToScale[scale](num))



def fromScaletoC(scale, num):
    scaleToC = {
        "C": lambda x : x,
        "D": lambda x : 100 - (x * (2/3)),
        "F": lambda x : (x - 32) * (),
        "K": lambda x : x + 273.15,
        "N": lambda x : x * (100/33),
        "Ra": lambda x : (x - 491.67) * (5/9),
        "Re": lambda x : x * (5/4),
        "Ro": lambda x : (x - 7.5) * (40/21) 
    }
    return(scaleToC[scale](num))

# fromCtoScale(32)