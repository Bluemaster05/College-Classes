numberIndians = input()

if numberIndians == "":
    numberIndians = 10
else:
    numberIndians = int(numberIndians)

line = ""
numOfThree = 1
for i in range(numberIndians):
    boys = i + 1
    if boys == numberIndians:
        line += f"{boys} little Indian boys."
        print(line)
    elif numOfThree < 3:
        line += f"{boys} little, "
        numOfThree += 1
    elif numOfThree == 3:
        line += f"{boys} little Indians;"
        print(line)
        line = ""
        numOfThree = 1
    