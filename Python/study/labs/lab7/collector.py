import re
import logging
import os
from imaplib import IMAP4_SSL
import dotenv
import time
# позволяет создавать локальные переменные окружения
# это файлы ".env"
dotenv.load_dotenv()
# загрузили данные из .env в область переменных окружения


def setup_logger(name, log_file):
    handler = logging.FileHandler(log_file)
    logger = logging.getLogger(name)
    logger.setLevel(logging.INFO)
    logger.addHandler(handler)
    return logger


# функция позволяет создавать разные log-файлы
first_logger = setup_logger('first_logger', 'success_request.log')
second_logger = setup_logger('second_logger', 'error_request.log')


def makeLogs():

    with IMAP4_SSL(os.environ.get('IMAP_HOST'), os.environ.get('IMAP_PORT')) as M:
        adminLogin = os.environ.get('EMAIL_LOGIN')
        adminPassword = os.environ.get('EMAIL_PASSWORD')
        rc, resp = M.login(adminLogin, adminPassword)
        M.select()
        # установили статус, чтобы могли делать поиск по сообщениям
        typ, data = M.search(None, 'ALL')
        # дата это просто тюпл с номерами сообщений
        for num in data[0].split():
            typ, data = M.fetch(num, '(RFC822)')
            theme = data[0][1].split()[39].decode("utf-8")
            msgBiteList = data[0][1].split()[40:]
            msgList = list(map(lambda x: x.decode("utf-8"), msgBiteList))
            msg = ' '.join(msgList)
            if re.match(r'APPl#\d+', theme):
                first_logger.info(f"id: {theme}, msg: {msg}")
            else:
                second_logger.info(f"msg: {msg}")


while True:
    with open('success_request.log', 'w+'):
        with open('error_request.log', 'w+'):
            pass
    makeLogs()
    time.sleep(int(os.environ.get('PERIOD_CHECK')))
