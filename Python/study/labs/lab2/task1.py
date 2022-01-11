x = 1
FILENAME = "forTask1.txt"
try:
    with open(FILENAME, "r") as file:
        content = file.read()
        a = content.split()
        a = a[:10]
        print("считаны первые существующие значения до 10-го: ")
        print(a)
    for i in a:
        i = int(i)
        x *= i
        with open("output.txt", "w") as file:
            file.write(str(x))
    print("произведение данных чисел из " +
          FILENAME + " записано в файл output.txt")
except Exception as e:
    print(e)
