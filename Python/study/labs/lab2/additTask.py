import csv
from itertools import permutations
j = 0
min = 0
m = []
coors = []
sums = []
FILENAME = "forAddTask.csv"
try:
    with open(FILENAME, "r", newline="") as file:
        reader = csv.reader(file, delimiter=';')
        for fstr in reader:
            if j == 0:
                j += 1
                dates = fstr[1:]
                continue
              # print(fstr[1:])
            m.append(fstr[1:])
    n = len(m)
    column = range(n)
    rows = list(permutations(column))
    for i in column:
        min += int(m[i][i])
        coors.append(i)
        sums.append(m[i][i])
    # забили произвольную сумму в переменную
    for row in rows:
        cur = 0
        for j in column:
            i = row[j]
            cur += int(m[i][j])
        # sums[j]=(m[i][j])
        if cur < min:
            min = cur
            coors = row
            for i in range(0, n):
                sums[i] = m[int(row[i])][int(column[i])]
    # print(sums,coors)
    with open("output.csv", "w") as file:
        fstr = [["date", "excursion", "sum"]]
        for i in range(0, n):
            fstr.append([dates[i], "#" + str(coors[i] + 1), str(sums[i])])
        writer = csv.writer(file, delimiter=';')
        writer.writerows(fstr)
except Exception as e:
    print(e)
print("записали итог в файл output.csv")
