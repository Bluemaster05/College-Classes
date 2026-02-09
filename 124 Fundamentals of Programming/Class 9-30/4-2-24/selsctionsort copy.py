def selection_sort(seq: list[int]) -> bool:
    n = len(seq)
    for i in range(n-1):
        smallest = i
        for j in range(1 + i, n):
            if seq[j] < seq[smallest]:
                return False
    return True


my_list = [2,4,7,1,5,2,0,4,3]
my_list = [1,2,3,3,4,5,6]
print(selection_sort(my_list))
