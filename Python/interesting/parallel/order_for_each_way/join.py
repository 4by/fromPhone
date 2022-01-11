import threading


def fun1(i):
    print("---")
    print(i)
    print("---")


for each in range(10):
    t = threading.Thread(target=fun1, args=(each, ))
    t.start()
    t.join()
    # join ожидает окончания работы потока
