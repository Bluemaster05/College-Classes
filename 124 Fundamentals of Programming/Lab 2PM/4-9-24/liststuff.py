"""
List processing routines
"""

from typing import Callable, Any


def maximum(a: list[int]) -> int | None:
    if len(a) == 0:
        return None
    else:
        largest = 0
        current_index = 0
        for i in range(len(a)):
            if a[current_index] > largest:
                largest = a[current_index]
            current_index += 1
    return largest


def find(a: list[int], seek: int) -> int:
    current_index = 0
    for i in range(len(a)):
        if a[current_index] == seek:
            return current_index
        current_index += 1
    return -1


def count(a: list[int], seek: int) -> int:
    current_index = 0
    occurances = 0
    for i in range(len(a)):
        if a[current_index] == seek:
            occurances +=1
        current_index += 1
    return occurances

def equivalent(v1: list[int], v2: list[int]) -> bool:
    if len(v1) == len(v2):
        for i in range(len(v1)):
            current_num = v1[i]
            v1_occurances = 0
            for j in range(len(v1)):
                if v1[j] == current_num:
                    v1_occurances += 1
            v2_occurances = 0
            for t in range(len(v2)):
                if v2[t] == current_num:
                    v2_occurances +=1
            if v1_occurances != v2_occurances:
                return False
        return True
    else:
        return False

def prefix(v1: list[int], v2: list[int]) -> bool:
    if len(v1) <= len(v2):
        for i in range(len(v1)):
            if v1[i] != v2[i]:
                return False
        return True
    else:
        return False    


def sort(a: list[int]) -> None:
    n = len(a)
    for i in range(n-1):
        smallest = i
        for j in range(1 + i, n):
            if a[j] < a[smallest]:
                smallest = j
        a[i], a[smallest] = a[smallest], a[i]


def is_ascending(seq: list[int]) -> bool:
    for i in range(len(seq) - 1):
        if seq[i] > seq[i + 1]:
            return False
    return True


def filter(seq: list[int], qual: Callable[[int], bool]) -> list[int]:
    new_list = []
    for i in range(len(seq)):
        if qual(seq[i]) == True:
            new_list += [seq[i]]
    return new_list

def map(seq: list[int], f: Callable[[int], bool]) -> None:
    for i in range(len(seq)):
        seq[i] = f(seq[i])
    pass

def rotate(v: list[int], distance: int) -> None:
    if distance < 0:
        distance = len(v) + distance
    for i in range(distance):
        swap_increase = 0
        for j in range(len(v) - 1):
            v[len(v) -2 - swap_increase], v[len(v) -1 - swap_increase] = v[len(v) -1 -swap_increase], v[len(v) -2 -swap_increase]
            swap_increase += 1

# y = [1, 2, 3]
# print(y)
# rotate(y, 1)
# print(y)

