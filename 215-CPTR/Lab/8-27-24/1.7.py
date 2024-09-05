Age = float(input('Please enter your age(Years): '))
Weight = float(input('Please enter your weight(lbs): '))
heart_Rate = float(input('Please enter your heart rate (BPM) : '))
Time = float(input('Please enter the time you spent (minutes):'))

Calories = ((Age * 0.2757) + (Weight * 0.03295) + (heart_Rate * 1.0781) - 75.4991) * Time / 8.368
print(f'Calories: {Calories:.2f} calories')