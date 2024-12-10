import time

timer = time.perf_counter()
with open('words_alpha.txt', 'r') as allWords:
    cleanWords = set()
    for word in allWords:
        # cleanWords[word.strip()] = word.strip()
        cleanWords.add(word.strip())



    with open('NewReversed.txt', 'w') as file:
            wordsAdded = 0
            for word in cleanWords:
                flipped_word = word[::-1]
                if word != flipped_word:
                    if word[::-1] in cleanWords:
                        wordsAdded += 1
                        print(f"Added {wordsAdded} words; Current Letter -> {word[:2]}")
                        file.write(f'{word} --> {word[::-1]}\n')
endtimer = time.perf_counter()

print(endtimer - timer)