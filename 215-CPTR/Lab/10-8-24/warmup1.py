word1List = list(input())
word2List = list(input())
sameChars = 0
if len(word1List) < len(word2List):
    for index in range(len(word1List)):
        if word1List[index] == word2List[index]:
            sameChars +=1
else:
    for index in range(len(word2List)):
        if word1List[index] == word2List[index]:
            sameChars +=1
pluralOrNotChars = "characters match"
if sameChars == 1:
    pluralOrNotChars = "character matches"

print(f"{sameChars} {pluralOrNotChars}")