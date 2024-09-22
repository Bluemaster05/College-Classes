words = input().split()


counter = 0
for i in range(len(words)):
    for j in words:
        if words[i].lower() == j.lower():
            counter += 1
    print(f"{j} {counter}")
    counter = 0