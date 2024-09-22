
def int_to_reverse_binary(number: int):
    binary = ''
    while number > 0:
        binary += str(number % 2)
        number = number // 2
    return binary


def string_reverse(string: str):
    reverse = list(string)
    reverse = reverse[::-1]
    output = "".join(reverse)
    return output

