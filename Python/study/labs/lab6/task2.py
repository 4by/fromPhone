import threading
import time

sem = threading.Semaphore(2)


def fun1(i):
    with sem:
        print("---")
        print(i)
        print("---")
        time.sleep(3)


for i in range(10):
    threading.Thread(target=fun1, args=(i, )).start()
    threading.Thread(target=fun1, args=(i, )).start()
