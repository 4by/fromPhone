l = input("введите значения типа int через пробел ").split()

for i in range(len(l)):
    try:
        l[i] = int(l[i])
        if i > 1 and l[i] != l[i - 2] + l[i - 1]:
            print(" не является подпоследовательностью Фиббоначи")
            break
        if len(l) < 3:
            raise
        elif (i == len(l) - 1):
            print(" является подпоследовательностью Фиббоначи")
    except ValueError:
        print(" ошибка: неверное значение: " + l[i])
        break
    except Exception as e:
        print("ошибка: для выявления результата необходимо минимум 3 числа")
        break
