def selection_sort(seq: list[int]) -> None:
    n = len(seq)
    for i in range(n-1):
        smallest = i
        for j in range(1 + i, n):
            if seq[j] < seq[smallest]:
                smallest = j
        seq[i], seq[smallest] = seq[smallest], seq[i]


my_list = [2,4,7,1,5,2,0,4,3]
print('Original List:', my_list)
selection_sort(my_list)
print('Sorted List :', my_list)
