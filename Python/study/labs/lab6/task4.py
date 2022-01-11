import requests
import threading
import time

sites = [
    'https://ya.ru',
    'https://google.com',
    'https://vk.com',
    'https://habr.com',
    'https://youtube.com',
    'https://facebook.com',
    'https://wikipedia.org',
    'https://amazon.com',
    'https://instagram.com',
    'https://mail.ru'
]

data1 = []
data2 = []


def fun1(i):
    data1.append(requests.get(i))


def fun2():
    time_start_2 = time.time()
    for i in sites:
        data2.append(requests.get(i))
    print("результат времени выполнения в одном потоке: ",
          round(time.time() - time_start_2, 2))


t = threading.Thread(target=fun2)
t.start()
t.join()


time_start_1 = time.time()
for each in sites:
    t = threading.Thread(target=fun1, args=(each, ))
    t.start()
    t.join()
print("результат времени выполнения в нескольких потоках: ",
      round(time.time() - time_start_1, 2))
