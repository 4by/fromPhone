import threading

lock1 = threading.Lock()
# "связывает" все внутри lock1


def fun1(i):
    with lock1:
      # with threading.Lock() нельзя
        print("---")
        print(i)
        print("---")


for each in range(10):
    threading.Thread(target=fun1, args=(each, )).start()
