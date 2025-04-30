def t(x):
    if x == 1:
        return 1
    else:
        return 3 * t(x-1) + 5

def abs_t(x):
    return int((3 ** (x - 1)) + 5 * (((3 ** (x - 1)) - 1 ) / 2 ))

print("n  : t(n)       = abs_t(n)")
for i in range(1, 21):
    print(f"{i:<2} : {t(i):<10} = {abs_t(i):<10}")
