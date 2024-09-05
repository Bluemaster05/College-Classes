#Cash register
#Logan
#8/27/24 - 


def breakdown_from_amount_and_denominations(amount, denominations):
    breakdown = []
    for denomination in denominations:
        breakdown.append(amount // denomination)
        amount %= denomination
    return breakdown

amount_due = float(input("Amount Due: "))
amount_paid = float(input("Amount Paid: "))
change_due = amount_paid - amount_due
print(f'${round((change_due), 2)}')
change_bills = int(change_due)
change_coins = round(change_bills - change_bills) * 100

bills_breakdown = breakdown_from_amount_and_denominations(change_bills, [100, 50, 20, 10, 5, 1])

denominations = reversed([1, 2, 5, 10, 20, 50, 100])
for denomination in denominations:
    num_bills = change_bills // denomination
    change_bills %= denomination
    if num_bills > 0:
        print(f'{num_bills} ${denomination} bills')

