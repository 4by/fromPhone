import pickle
FILENAME = "user"
name = "Tom"
age = 19
with open(FILENAME, "wb") as file:
  # дополнительно идет "b"
    pickle.dump(name, file)
    pickle.dump(age, file)
with open(FILENAME, "rb") as file:
    name = pickle.load(file)
    age = pickle.load(file)
    print("Имя:", name, "\tВозраст:", age)

    # с n-массивом dump и load будут один раз
    # и в load для считывания идёт цикл
