from smtplib import SMTP

username = 'gnosiop@gmail.com'
password = 'P0ubbub!'
with SMTP("smtp.gmail.com:587") as smtp:
    # адрес сервера почты и порт
    smtp.starttls()
    # зашифровка потока данных
    smtp.login(username, password)
    # авторизация
    subject = 'checking'
    body = 'it is a test msg for checking'
    msg = f'Subject: {subject}\n\n{body}'
    # такой синтаксис для задания темы
    smtp.sendmail(username, username, msg)
    #отправить(откуда, куда, сообщение)
