import multiprocessing

cv = multiprocessing.Condition()


def produce():
    with cv:
        for i in range(1, 6):
            print(i)
        cv.notify()
        # как только один поток выполнил операцию
        # он уведомил другой и "разбудил" его


def consume():
    with cv:
        cv.wait(timeout=2)
        # время на "пробуждение"
    print("второй поток")


t2 = multiprocessing.Process(target=consume)
t1 = multiprocessing.Process(target=produce)
t1.start()
t2.start()
