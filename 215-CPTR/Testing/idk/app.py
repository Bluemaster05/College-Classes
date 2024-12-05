# Read integers into a list and return the list.
comparisons = 0

def read_nums():
    nums = input().split()
    return [int(num) for num in nums]

# Output the content of a list, separated by spaces.
def print_nums(numbers):
    for num in numbers:
        print (num, end=' ')
    print()

def merge(numbers, low, pivot, high):
    global comparisons
    merged_size = high - low + 1               
    merged_numbers = []                   
    for l in range(merged_size):
        merged_numbers.append(0)

    merge_pos = 0                         

    left_pos = low                          
    right_pos = pivot + 1                     

    while left_pos <= pivot and right_pos <= high:
        # comparisons +=1
        if numbers[left_pos] < numbers[right_pos]:
            comparisons +=1
            merged_numbers[merge_pos] = numbers[left_pos]
            left_pos = left_pos + 1
        else:
            comparisons +=1
            merged_numbers[merge_pos] = numbers[right_pos]
            right_pos = right_pos + 1
        merge_pos = merge_pos + 1

    while left_pos <= pivot:
        # comparisons +=1
        merged_numbers[merge_pos] = numbers[left_pos]
        left_pos = left_pos + 1
        merge_pos = merge_pos + 1

    while right_pos <= high:
        # comparisons +=1
        merged_numbers[merge_pos] = numbers[right_pos]
        right_pos = right_pos + 1
        merge_pos = merge_pos + 1

    merge_pos = 0
    while merge_pos < merged_size:
        # comparisons +=1
        numbers[low + merge_pos] = merged_numbers[merge_pos]
        merge_pos = merge_pos + 1


def merge_sort(numbers, low, high):
    """
    >>> merge_sort([1, 4, 2, 5, 6], 2, 4)
    2 3 | 4 4
    2 2 | 3 3
    >>> merge_sort([1, 4, 2, 5, 6], 1, 4)
    1 2 | 3 4
    1 1 | 2 2
    3 3 | 4 4
    >>> merge_sort([1, 4, 2, 5, 6], 3, 1)
    
    """
    global comparisons
    pivot = 0
    # comparisons +=1
    if low < high:
        pivot = (low + high) // 2 
        # Trace output added to code in book
        print(f'{ low } { pivot } | { pivot + 1 } { high }')

        merge_sort(numbers, low, pivot)
        merge_sort(numbers, pivot + 1, high)

        merge(numbers, low, pivot, high)


if __name__ == '__main__':
    numbers = read_nums()

    print ('unsorted:', end=' ')
    print_nums(numbers)
    print()

    merge_sort(numbers, 0, len(numbers) - 1)

    print ('\nsorted:', end=' ')
    print_nums(numbers)
    print(f'comparisons: {comparisons}')

    import doctest
    doctest.testmod()