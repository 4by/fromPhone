import threading

counter = 0

b = threading.Barrier(2, timeout=5)
# это барьер ждёт, что к нему будет обращено
# 2 потока. После этого продолжает выполнение
# но если ожидание будет больше timeout, то
# будет выдана ошибка


def server():
    b.wait()
    global counter
    counter += 1
    counter -= 1


for i in range(10):

    threading.Thread(target=server).start()

print(counter)
