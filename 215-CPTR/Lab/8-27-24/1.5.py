gas_mileage = float(input("Please enter your gas mileage: "))
gas_cost = float(input("Please enter the cost of your gas: "))

your_value1 = 20 * (1/ gas_mileage) * gas_cost
your_value2 = 75 * (1/ gas_mileage) * gas_cost
your_value3 = 500 * (1/ gas_mileage) * gas_cost

print(f'{your_value1:.2f} {your_value2:.2f} {your_value3:.2f}')