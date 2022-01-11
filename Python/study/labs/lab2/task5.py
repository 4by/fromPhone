FILENAME = "forTask5.txt"
l = list()


def count_char(text, char):
    count = 0
    for c in text:
        if c == char:
            count += 1
    return count


try:
    with open(FILENAME, "r") as file:
        text = file.read()
        for char in "abcdefghijklmnopqrstuvwxyz":
            perc = 100 * count_char(text, char) / len(text)
            l.append([round(perc, 2), char])
        with open("output.txt", "w") as file:
            for i in list(reversed(sorted(l))):
                file.write(str(i[0]) + "%: " + str(i[1]) + "\n")
    print("записали итог в файл output.txt")
except ZeroDivisionError:
    print("файл пустой")
except Exception as e:
    print(e)
