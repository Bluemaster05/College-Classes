# TODO: Declare global variables here.
recursions = 0
comparisons = 0

def binary_search(nums, target, lower, upper):
    global recursions
    global comparisons
    index = (lower + upper) // 2
    # if upper == -1 
    #     index = len(nums[lower:]) // 2
    if nums[index] == target:
        comparisons += 1
        return index
    elif lower == upper:
        comparisons += 1
        return -1
    else:
        if nums[index] < target:
            comparisons += 2
            recursions += 1
            return binary_search(nums, target, index + 1, upper)
        else:
            comparisons += 2
            recursions += 1
            return binary_search(nums, target, lower, index - 1)
        


if __name__ == '__main__':
    # Input a list of nums from the first line of input
    nums = [int(n) for n in input().split()]
    
    # Input a target value
    target = int(input())

    # Start off with default values: full range of list indices
    index = binary_search(nums, target, 0, len(nums) - 1)

    # Output the index where target was found in nums, and the
    # number of recursions and comparisons performed
    print(f'index: {index}, recursions: {recursions}, comparisons: {comparisons}')


