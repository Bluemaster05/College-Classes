def fibonacci(n: int):
    if n >= 0:
        if n == 0:
            return 0
        elif n == 1:
            return 1
        elif n > 1:
            num1 = 1
            num2 = 1
            for i in range(n - 2):
                store = num1
                num1 += num2
                num2 = store
            return num1
    else:
        return -1

print(fibonacci(7))

# if __name__ == '__main__':
    # start_num = int(input())
    # print(f'fibonacci({start_num}) is {fibonacci(start_num)}')