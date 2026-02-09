gender = input('Please enter your biological gender (female or male): ')
if gender.lower() != 'male' and gender.lower() != 'female':
    print('Gender not recognized; please rerun the program.')
    exit()
weight = int(input('Please enter you weight in pounds: '))
height = input('Please enter you height in feet and inches separated by a space: ')
age = int(input('Please enter your age in years: '))
actlevel = int(input('Activity levels:\n   1 sedentary\n   2 somewhat active (exercise occasionally)\n   3 active (exercise 3 or 4 days a week)\n   4 highly active (exercise everyday)\nPlease enter your activity level (1, 2, 3, or 4): '))
if not 1 <= actlevel <= 4:
    print('Activity level must be one of 1, 2, 3, or 4; please rerun the program.')
    exit()

feet = int(height.split()[0])
inches = int(height.split()[1])
height = inches + feet * 12
height = round(height * 2.54, 2)
weight = round(weight * 0.453529, 6)


if gender.lower() == 'male':
    BMR = ((round(10 * weight, 6))) + ((round(6.25 * height, 2))) - (5 * age) + 5
if gender.lower() == 'female':
    BMR = ((round(10 * weight, 6))) + ((round(6.25 * height, 2))) - (5 * age) + -161

BMR = round(BMR * (1.10 + (actlevel * .10)), 1)
bread = round(BMR / 69, 1)

print(f'Total energy required per day is {BMR} kcals.')
print(f'To maintain your weight, you must consume the equivalent of {bread} slices of whole wheat bread per day.')