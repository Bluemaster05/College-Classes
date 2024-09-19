numbers = input().split()
numbers = map(int, numbers)

ranges = input().split()
start = int(ranges[0])
end = int(ranges[1])

output = ""

for number in numbers:
    if number <= end and number >= start:
        output += str(number) + ","
print(output, end="")



