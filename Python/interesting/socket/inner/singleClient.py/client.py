import socket

HOST = '127.0.0.1'
# адрес сервера
PORT = 50007
# порт сервера
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
   # клиент это второй сокет
    client.connect((HOST, PORT))
    # подключение на адрес сервера к listen-порту
    client.send('msgFromClient'.encode("utf-8"))
    # отправка сообщения на сервер только у виде байтов
    data = client.recv(1024)
    # данные вернулись на сокет клиента
print(data.decode("utf-8"))
