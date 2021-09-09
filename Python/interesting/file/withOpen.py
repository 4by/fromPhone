# имя файла

FILENAME = "messages.txt"

messages = list()
for i in range(4):
    message = input("Введите строку " + str(i + 1) + ": ")
    messages.append(message + "\n")

with open(FILENAME, "a") as file:
    for message in messages:
        file.write(message)
    # флаг "а" - append (дозапись)
    # есть также r,w

print("Считанные сообщения")
with open(FILENAME, "r") as file:
    for message in file:
        print(message, end="")
# readline(): считывает одну строку из файла
# read(): считывает все содержимое файла в одну строку
# readlines(): считывает все строки файла в список

# выше readline() используется неявно (по умолчанию)
# пример явного использования: file.readline()
