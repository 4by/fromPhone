print("числа Армстронга: \n")
for number in range(100, 10000):
    a = len(str(number))
    sum = 0
    for i in range(0, a):
        sum += int(str(number)[i])**a
    if sum == number:
        print(number)
