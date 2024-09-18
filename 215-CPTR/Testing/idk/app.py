contacts = input()
contacts.replace(",", " ")
contacts = contacts.split()

find = input()

if find in contacts:
    print(contacts[contacts.index(find) + 1])