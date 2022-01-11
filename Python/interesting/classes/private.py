class dateClass:

    _day = 5
    __day2 = 7

    def _maxDay(self):
        return 6

    def __maxDay2(self):
        return 8

    def checking(self):
        print(self._day)
        # частная переменная изнутри
        print(self._maxDay())
        # частный метод изнутри
        print(self.__day2)
        # строго частная переменная изнутри
        print(self.__maxDay2())
        # строго частный метод изнутри


one = dateClass()

one.checking()
# (запускаем вызовы изнутри)

print(dateClass._day)
# частная переменная снаружи

print(dateClass._maxDay(one))
print(one._maxDay())
# частный метод снаружи(2 способа)

print(one._dateClass__day2)
# строго частная переменная снаружи

print(one._dateClass__maxDay2())
# строго частный метод снаружи
