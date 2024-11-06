# TODO: Declare any necessary variables here. 
fileName = input()
mid1 = 0
mid2 = 0
final = 0
num_students = 0
# TODO: Read a file name from the user and read the tsv file here. 
file = open(fileName)
report = open('report.tsv', 'w')
for line in file.readlines():
    scores = line.split()
    average = (int(scores[2]) + int(scores[3]) + int(scores[4])) / 3
    mid1+= int(scores[2])
    mid2+= int(scores[3])
    final+= int(scores[4])
    num_students+=1
    grade = 'A'
    match grade:
        case 'A' if average >= 90:
            # grade = 'A'
            pass
        case 'B' if average >= 80 and x < 90:
            # grade = 'B'
            pass
        case 'C' if average >= 70 and x < 80:
            # grade = 'C'
            pass
        case 'D' if average >= 60 and x < 70:
            # grade = 'D' pass
            pass
        case 'F' if average < 60:
            # grade = 'F'
            pass
    report.write(f'{line}\t{grade}\n')

report.write(f'\n')
mid1 = mid1 / num_students
mid2 = mid2 / num_students
final = final / num_students
report.write(f'Averages: midterm1 {mid1}, midterm2 {mid2}, final {final}')


            
   
# TODO: Compute student grades and exam averages, then output results to a text file here. 