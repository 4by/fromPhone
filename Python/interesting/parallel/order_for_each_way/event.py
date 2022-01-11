import threading
from time import sleep
e = threading.Event()


def produce():
    e.set()
    print("1")
    sleep(1)
    # чтобы set не закончился до того,
    # как его "поймает" is_set
    e.clear()


def consume():
    e.wait()
    if e.is_set():
        # "ловит" set
        print("2")
    print("3")


t1 = threading.Thread(target=produce)
t2 = threading.Thread(target=consume)
t1.start()
t2.start()
