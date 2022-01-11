import re
FILENAME1 = "forTask4(1).txt"
FILENAME2 = "forTask4(2).txt"
words1 = list()
words2 = list()
words12 = list()
try:
    with open(FILENAME1, "r") as file:
        str = file.read()
        words1 = re.findall(r"[А-Яа-яA-Za-z]+", str)
    with open(FILENAME2, "r") as file:
        str = file.read()
        words2 = re.findall(r"[А-Яа-яA-Za-z]+", str)
    for i in words1:
        for j in words2:
            if i == j and not i in words12:
                words12.append(i)
    with open("output.txt", "w") as file:
        for i in words12:
            file.write(i + "\n")
    print("записали итог в файл output.txt")
except Exception as e:
    print(e)
