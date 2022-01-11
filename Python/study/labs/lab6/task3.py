import threading
import time


p = []
q = []
num = 5000
m = [[]]


for i in range(0, num):
    q.append(i * i)
    p.append(i - 1)
# векторы представил ввиде массивов
# заполнил векторы произвольным образом


def matrix_fill(q, p):
    for i in range(1, num):
        m.append([])
    for i in range(0, num):
        for j in range(0, num):
            try:
                m[i].append(1 / (1 + (q[j] - p[i])))
            except ZeroDivisionError:
                m[i].append("divByZero")


time_start_1 = time.time()
matrix_fill(q, p)
print(
    "результат времени выполнения без использования threading: ",
    round(
        time.time() -
        time_start_1,
        2))

m = [[]]


time_start_2 = time.time()
t = threading.Thread(target=matrix_fill, args=(q, p, ))
t.start()
t.join()
print(
    "результат времени выполнения с использованием threading (один поток): ",
    round(
        time.time() -
        time_start_2,
        2))
