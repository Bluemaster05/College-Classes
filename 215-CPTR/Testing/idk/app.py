numsList = input().split()
floatlist = [float(j) for j in numsList]
lastlist = [round(float(i) / max(floatlist), 2) for i in floatlist]
m = [str(i) for i in lastlist]
print(" ".join(m))