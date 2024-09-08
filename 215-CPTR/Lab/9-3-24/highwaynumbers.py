highway_number = int(input())

def find_direction(highway_number):
    if highway_number % 2 == 0:
        return "east/west"
    else:
        return "north/south"



if highway_number >= 1 and highway_number <=99:
    print(f'I-{highway_number} is primary, going {find_direction(highway_number)}.')
elif highway_number >= 100 and highway_number <= 999 and highway_number % 100 != 0:
    serving = int(str(highway_number)[1:])
    print(f"I-{highway_number} is auxiliary, serving I-{serving}, going {find_direction(serving)}.")
else:
    print(f"{highway_number} is not a valid interstate highway number.")
