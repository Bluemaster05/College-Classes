def is_list_mult10(my_list):
    mult10 = 0
    for number in my_list:
        if number % 10 == 0:
            mult10 += 1
    if mult10 == len(my_list):
        return True
    else:
        return False
def is_list_no_mult10(my_list):
    notMult10 = 0
    for number in my_list:
        if number % 10 != 0:
            notMult10 += 1
    if notMult10 == len(my_list):
        return True
    else:
        return False

if __name__ == '__main__':
    iterations = int(input())
    numList = []
    for i in range(iterations):
        numList.append(int(input()))
    if is_list_mult10(numList):
        print("all multiples of 10")
    elif is_list_no_mult10(numList):
        print("no multiples of 10")
    else:
        print("mixed values")
