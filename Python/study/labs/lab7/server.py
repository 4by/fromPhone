import threading
import os
import socket
from smtplib import SMTP
import re
import dotenv
# позволяет создавать локальные переменные окружения
# это файлы ".env"
dotenv.load_dotenv()
# загрузили данные из .env в область переменных окружения

HOST = '127.0.0.1'
PORT = 8080
application_id = 0
serv_name = "pleaseenteryour@gmail.com"
serv_pass = "pswd"




class ClientThread(threading.Thread):
		def __init__(self, clientAddress, clientSocket):
			threading.Thread.__init__(self)
			self.csocket = clientSocket
			print("New connection added: ", clientAddress)

		def run(self):
			print("Connection from : ", clientAddress)
			ask = ['adress', 'message']
			ans = []
			i = 0
			pForMsg = r"\w+"
			m = "([a-zA-Z0-9_.-])+"
			pForAdr = r"^" + m + "@" + m + "." + m + "$"
			pattern = [pForAdr, pForMsg]
			while self.csocket:
			    if i == len(ask):
			        break
			    else:
			        self.csocket.send(f"Enter a {ask[i]}: ".encode("utf-8"))
			        data = self.csocket.recv(1024).decode("utf-8")
			        if re.match(pattern[i], data):
			            ans.append(data)
			            i += 1
			self.csocket.send("ok".encode("utf-8"))
			
			with SMTP(os.environ.get('SMTP_HOST'), os.environ.get('SMTP_PORT')) as smtp:
				global application_id
				# адрес сервера почты и порт
				smtp.starttls()
				# зашифровка потока данных
				smtp.login(serv_name, serv_pass)
				# авторизация
				application = f'Subject: APPl#{application_id}\n\n{ans[1]}'
				notify = f'Subject: APPl#{application_id}\n\n{"your application accepted"}'
				# такой синтаксис для задания темы
				smtp.sendmail(serv_name, os.environ.get('EMAIL_LOGIN'), application)
				smtp.sendmail(serv_name, ans[0], notify)
				application_id += 1
				# отправка сообщений
				






with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server: 
		server.bind((HOST, PORT))
		print("Server started")
		print("Waiting for client request..")
		while True:
		  server.listen()
		  clientSock, clientAddress = server.accept()
		  newThread = ClientThread(clientAddress, clientSock)
		  newThread.start()
