# Leave everything in the folder named "files" alone!
def posinstring(word: str, line: str) -> str | int:
    """
    Looks for instance of word in line. If found will return index of first instance, if not found will return 'Not found'
    """
    if word.lower() in line.lower():
        return line.lower().index(word.lower())
    else:
        return "Not found"


filename = input('Path to file: ')
redactedWord = input('Word to redact: ')
replacement = ''
for char in redactedWord:
    replacement += 'X'
print(f'REDACTED-{filename} shows "{replacement}" instead of every occurrence of "{redactedWord}".')

with open(filename, 'r', encoding='utf-8') as file:
    lines = file.readlines()

redactFile = f'REDACTED-{filename}'
if '/' in filename:
    direct = filename[filename.index('/') + 1:]
    redactFile = f'REDACTED-{direct}'
    hold = filename[:filename.index('/') + 1]
    redactFile = f'{hold}/{redactFile}'

with open(redactFile, 'w+', encoding='utf-8') as file:
        
    # Make Replacement Word 'xxxxx'
    replacement = ''
    for char in redactedWord:
        replacement += 'X'

    for line in lines:
        while posinstring(redactedWord, line) != "Not found":
            # Use posinstring to grab position
            startIndex = posinstring(redactedWord, line)
            endIndex = startIndex + len(redactedWord)
            line = line[:startIndex] + replacement  + line[endIndex:]
        file.write(line)

if __name__ == "__main__":
    import doctest
    doctest.testfile("redacttest.txt")
    doctest.testmod()