employees = input().split()
hours = input().split()
separator_char = input()

print(f"{"Employees":^26}|{"Hours":>26}")
print(f"{separator_char * 52}")
print(f"{employees[0]:>26}|{hours[0]:>26}")
print(f"{employees[1]:>26}|{hours[1]:>26}")
print(f"{employees[2]:>26}|{hours[2]:>26}")