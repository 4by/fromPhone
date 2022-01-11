def counter():
    num = 0

    def incrementer():
        #	nonlocal num
        num += 1
        return num
    return incrementer


c = counter()
print(c())

# nonlocal указывает на то, что эта переменная не является локальной,
# следовательно, ее значение будет взято из ближайшей области видимости, в которой
# существует переменная с таким же именем
