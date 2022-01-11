import socket

HOST = '127.0.0.1'
# адрес сервера
PORT = 8080
# порт сервера
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as client:
   # клиент это второй сокет
    client.connect((HOST, PORT))

    while True:
        data = client.recv(1024).decode("utf-8")
        if data != "ok":
            print(data)
            client.send(input("").encode("utf-8"))
        else:
            client.close()
            break


