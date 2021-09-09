def counter(num):
    m = [[1]]
    t = []
    for i in range(0, num):
        m[0].append(1)
        m.append([1])
    for i in range(1, num + 1):
        for j in range(1, num + 1):
            m[i].append(m[i][j - 1] + m[i - 1][j])
    for i in range(0, num + 1):
        t.append([])
        for j in range(0, i + 1):
            t[i].append(m[j][i - j])
    for i in range(0, len(t) - 1):
        print(t[i])


try:
    x = input("введите количество строк: ")
except Exception as e:
    print(e)
else:
    counter(int(x))
