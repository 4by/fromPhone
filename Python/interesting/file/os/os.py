import os

# mkdir(): создает новую папку
# rmdir(): удаляет папку
# rename(): переименовывает файл
# remove(): удаляет файл

filename = input("Введите путь к файлу: ")
if os.path.exists(filename):
    print("Указанный файл существует")
else:
    print("Файл не существует")
