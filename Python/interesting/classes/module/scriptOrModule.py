def function():
    print("This is a module function")


if __name__ == "__main__":
    # или: def main():
    print("This is a script")

    # при импорте этого файла как модуль
    # будет видно только все, что выше main
    # но при запуске как скрипт
    # видно все
