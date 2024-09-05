print('Enter a time in 12-hour format')
hour = int(input('Hour (1-12): '))
minute = int(input('Mintes (0-59): '))
angle = float((minute * 6) - (hour * 30 +((minute / 60) * 30)))

if minute < 10:
    minute = '0' + str(minute)

print(f"The angle between the hour hand and the minute hand at {hour}:{minute} is {angle} degrees.")