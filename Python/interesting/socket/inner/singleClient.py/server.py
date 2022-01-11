import socket

HOST = '127.0.0.1'
PORT = 50007
# каждый адрес имеет множество портов
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
    # сокет(пара: ip-адрес и порт) создан
    # принимает два аргумента:
    # 1)семейство адресов (интернет)
    # 2)протокол передачи данных (tcp/ip)
    server.bind((HOST, PORT))
    # создали сервер("дописали в сокет адрес и порт")
    server.listen(1)
    # указали, что готовы принимать входящие подключения
    conn, addr = server.accept()
    # извлекли информацию о соединении и о клиенте
    with conn:
        print(f'Connected by {addr}')
        while True:
            data = conn.recv(1024)
            # сообщение от клиента
            # байты объединены в пакеты.
            # Аргумент показывает размер пакета
            conn.send(data)
            # возвращаем сообщение клиенту;
            if not data:
                break
