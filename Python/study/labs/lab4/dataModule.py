class dateClass:
    def __init__(self, day=1, month=1, year=1):
        day = int(day)
        month = int(month)
        year = int(year)
        if not isinstance(year, int) or year <= 0:
            raise Exception("error: bad year value")
        self._year = year
        if not isinstance(month, int) or month not in range(1, 13):
            raise Exception("error: bad month value")
        self._month = month
        if not isinstance(day, int) or day not in range(1, self.maxValue + 1):
            raise Exception("error: bad day value")
        self._day = day
   # конструктор обьекта со значениями по умолчанию

    def __del__(self):
        print("удален из памяти")
    # деструктор объекта

    def __str__(self):
        return "\n год: {} \t месяц: {} \t день: {}\n".format(
            self._year, self._month, self._day)
    # вывод информации об объекте

    @property
    def isLeap(self):
        if self._year % 4 != 0 or (self._year %
                                   100 == 0 and self._year % 400 != 0):
            return False
        else:
            return True
    # проверяет на високосный год

    @property
    def maxValue(self):
        if self._month == 2 and self.isLeap:
            return 28
        elif self._month == 2 and not self.isLeap:
            return 29
        elif self._month in [1, 3, 5, 7, 8, 10, 12]:
            return 31
        else:
            return 30
   # выдает количество дней в месяце

    def plusFive(self):
        diff = self.maxValue - self._day
        if diff >= 5:
            self._day += 5
        elif self._month != 12:
            self._month += 1
            self._day = 5 - diff
        else:
            self._year += 1
            self._month = 1
            self._day = 5 - diff
   # прибавляет пять дней


if __name__ == "__main__":
    try:
        one = dateClass()
        print("обьект со значениями по умолчанию: ", one)
        two = dateClass(28, 12, 2020)
        print("обьект со значениями-константами: ", two)
        a = input("введите значение-день для третьего объекта: ")
        b = input("введите значение-месяц для третьего объекта: ")
        c = input("введите значение-год для третьего объекта: ")
        three = dateClass(a, b, c)
        print("обьект со значениями с клавиатуры: ", three)

        print("проверка трех объектов на високосный год: ",
              [one.isLeap, two.isLeap, three.isLeap])
        one.plusFive()
        two.plusFive()
        three.plusFive()
        print("результат прибавления пяти дней к первому объекту: ", one)
        print("результат прибавления пяти дней к первому объекту: ", two)
        print("результат прибавления пяти дней к первому объекту: ", three)
    except Exception as e:
        print(e)
