maxVal = 0
maxList = []


def delim(numb):
    cur = 0
    for i in range(numb // 2, 1, -1):
        if (numb % i == 0):
            cur += 1
    return cur


try:
    l = input("введите два значения типа int через пробел ").split()[:2]
    [a, b] = l
    int(a)
    int(b)
except Exception as e:
    print(e)
else:
    for i in range(int(a), int(b) + 1):
        if delim(i) > maxVal:
            maxList = []
            maxVal = delim(i)
            maxList.append(i)
        elif maxVal == delim(i):
            maxList.append(i)
    print(tuple(maxList))
    print("число делителей (исключая само число и единицу): " + str(maxVal))
