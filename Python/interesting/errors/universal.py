
try:
    val = int(input("input positive number: "))
    if val < 0:
        raise Exception("Neg val: " + str(val))
except Exception as e:
    print(e)
