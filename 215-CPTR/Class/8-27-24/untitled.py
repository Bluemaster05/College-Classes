#Cash register
#Logan
#8/27/24 - 

amount_due = float(input("Amount Due: "))
amount_paid = float(input("Amount Paid: "))
change_due = amount_paid - amount_due
print(f'${round((change_due), 2)}')