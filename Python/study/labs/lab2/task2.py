FILENAME = "forTask2.txt"
min = 0
max = 0
minSur = ""
maxSur = ""
try:
    with open(FILENAME, "r") as file:
        a = file.readlines()
        for i in range(1, len(a)):
            data = a[i].split(";")
        # print(data)
            surname = data[0].split()[0]
            birth = int(data[2].split()[0])
            if min == 0 or birth < max:
                max = birth
                maxSur = surname
            if birth > min:
                min = birth
                minSur = surname
        with open("output.txt", "w") as file:
            file.write("самый младший: " + minSur + "\n")
            file.write("самый старший: " + maxSur)
        print("записали итог в файл output.txt")
except Exception as e:
    print(e)
