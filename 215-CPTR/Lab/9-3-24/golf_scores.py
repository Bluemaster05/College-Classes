stroks = int(input())
par = int(input())
par_scope = [3, 4 ,5]
score_name = ""

if par not in par_scope:
    score_name = "Error"
elif par - 2 == stroks:
    score_name = "Eagle"
elif par - 1 == stroks:
    score_name = "Birdie"
elif par == stroks:
    score_name = "Par"
elif par + 1 == stroks:
    score_name = "Bogey"
else:
    score_name = "Error"

print(f"Par {par} in {stroks} strokes is {score_name}")