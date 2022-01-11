import multiprocessing


class MyProcess(multiprocessing.Process):

    def __init__(self, number, logger):
        multiprocessing.Process.__init__(self)
        self.number = number
        self.logger = logger

    def run(self):
        doubler(self.number, self.logger)


def doubler(number, logger):
    result = number + logger


for i in range(5):
    process = MyProcess(i, i)
    # запустит init
    process.start()
    # запустит run
