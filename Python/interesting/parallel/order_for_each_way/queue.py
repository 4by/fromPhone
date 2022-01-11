import threading
import queue
# для процессов разделенных между ядрами профессора
# следует использовать:
#from multiprocessing import Queue

q = queue.Queue()

for i in range(50):
    q.put(i)
    # помещает элемент в конец очереди


def worker(n, q):
    while not q.empty():
        item = q.get()
        # метод get получает первый элемент из очереди
        # (следующий get получит следующий за ним элемент)
        print(n, item)


th1 = threading.Thread(target=worker, args=(1, q))
th2 = threading.Thread(target=worker, args=(2, q))
th1.start()
th2.start()

# очередь обладает таким свойством, что два потока
# не смогут получить один элемент из нее
