name = input().split()

if len(name) == 2:
    print(f"{name[1]}, {name[0][0]}.")
elif len(name) == 3:
    print(f"{name[2]}, {name[0][0]}.{name[1][0]}.")