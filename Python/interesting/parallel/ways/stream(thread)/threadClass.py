import threading


class MyThread(threading.Thread):

    def __init__(self, number, logger):
        threading.Thread.__init__(self)
        self.number = number
        self.logger = logger

    def run(self):
        doubler(self.number, self.logger)


def doubler(number, logger):
    result = number + logger


for i in range(5):
    thread = MyThread(i, i)
    # запустит init
    thread.start()
    # запустит run
