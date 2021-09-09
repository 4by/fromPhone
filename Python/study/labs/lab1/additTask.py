p = 0
i = 9
try:
    y = int(input("введите номер \"волшебного\" числа: "))
    if y <= 0:
        raise ValueError
except ValueError:
    print("ошибка: вводимое значение должно быть целым положительным числом")
else:
    while p < y:
        i += 1
        s = 0
        for j in range(len(str(i))):
            s += int(str(i)[j])
        if s == 10:
            p += 1
    print(i)
