import re
import logging


from imaplib import IMAP4_SSL
with IMAP4_SSL("imap.gmail.com", 993) as M:
    rc, resp = M.login('gnosiop@gmail.com', 'P0rnhubbub!')
    M.select()
    # установили статус, чтобы могли делать поиск по сообщениям
    typ, data = M.search(None, 'ALL')
    # дата это просто список с номерами сообщений
    for num in data[0].split():
        typ, data = M.fetch(num, '(RFC822)')
        theme = data[0][1].split()[39].decode("utf-8")
        msgBiteList = data[0][1].split()[40:]
        msgList = list(map(lambda x: x.decode("utf-8"), msgBiteList))
        msg = ' '.join(msgList)
