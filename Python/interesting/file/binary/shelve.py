import shelve


#d = shelve.open(filename)
# d.close()

# c: файл открывается для чтения и записи (значение по умолчанию). Если файл не существует, то он создается.
# r: файл открывается только для чтения.
# w: файл открывается для записи.
# n: файл открывается для записи. Если файл не существует, то он
# создается. Если он существует, то он перезаписывается


FILENAME = "states2"
with shelve.open(FILENAME) as states:
    states["London"] = "Great Britain"
    states["Paris"] = "France"
    states["Berlin"] = "Germany"
    states["Madrid"] = "Spain"
with shelve.open(FILENAME) as states:
    print(states["London"])
    print(states.get("Brussels", "Undefined"))
    # знание по умолчанию
    state = states.pop("London", "NotFound")
    del states["Madrid"]  # удаляем объект с ключом Madrid
    # удаление двумя способами
    # states.clear() удаляет все
    for state in states.items():
        print(state)
        # items возвращает кортежи
