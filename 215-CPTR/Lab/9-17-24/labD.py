string = input().replace(" ", "")
string = list(string)

char_to_remove = []
for char in string:
    if char.isalpha() == False:
        char_to_remove.append(char)
for char in string:
    if char in char_to_remove:
        if char in string:
            string[string.index(char)] = ""

result = "".join(string)
print(result)