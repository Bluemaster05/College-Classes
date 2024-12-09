with open('common.txt', 'r') as allWords:
    cleanWords = []
    for word in allWords:
        cleanWords.append(word.strip())



    with open('common_reversed.txt', 'w') as file:
            wordsAdded = 0
            for word in cleanWords:
                if word[::-1] in cleanWords:
                    wordsAdded += 1
                    print(f"Added {wordsAdded} words; Current Letter -> {word[:2]}")
                    file.write(f'{word} --> {word[::-1]}\n')