
class NegValException(Exception):
    # наследуется от любой ошибки
    pass
    # оператор-заглушка


try:
    val = int(input("input positive number: "))
    if val < 0:
        raise NegValException("Neg val: " + str(val))
except NegValException as e:
    print(e)
