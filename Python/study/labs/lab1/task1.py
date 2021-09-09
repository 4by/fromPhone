try:
    y = int(input("введите год: "))
    if y <= 0:
        raise ValueError
except ValueError:
    print("ошибка: вводимое значение должно быть целым положительным числом")
else:
    if y % 4 != 0 or (y % 100 == 0 and y % 400 != 0):
        print("год не является високосным")
    else:
        print("год является високосным")
