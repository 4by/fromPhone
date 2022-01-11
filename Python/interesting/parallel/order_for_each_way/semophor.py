import threading
import time

sem = threading.Semaphore(3)
# показыыает максимальное количество
# "параллелных" потоков, которые могут существовать
# если оно достигнуто, то "лишние потоки"
# будут ждать, пока освободится место


def fun1(i):
    with sem:
        print("---")
        print(i)
        print("---")
        time.sleep(5)
        # показывает промежуток между "порциями" потоков


for i in range(10):
    threading.Thread(target=fun1, args=(i, )).start()
