import shelve


class examExcep(Exception):
    pass
    # пример пользовательского исключения


class dateClass:
    def __init__(self, day=1, month=1, year=1):
        day = int(day)
        month = int(month)
        year = int(year)
        if not isinstance(year, int) or year <= 0:
            raise examExcep
        self._year = year
        if not isinstance(month, int) or month not in range(1, 13):
            raise examExcep
        self._month = month
        if not isinstance(day, int) or day not in range(1, self.maxValue + 1):
            raise examExcep
        self._day = day
   # конструктор обьекта со значениями по умолчанию

    def __del__(self):
        print("удален из памяти")
    # деструктор объекта

    def __str__(self):
        return "\n год: {} \t месяц: {} \t день: {}".format(
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

    @property
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


class event(dateClass):

    def __init__(self, day=1, month=1, year=1, name=""):
        assert isinstance(name, str), "ошибка: плохое название события"
        self._eventName = name
        self._invited = []
        super().__init__(day, month, year)
        # демонстрация вызова конструктора родительского класса

    def __str__(self):
        return "\n событие: {} \n приглашенные: {} \n дата: {}.{}.{}\n дней в месяце: {}".format(
            self._eventName, self._invited, self._year, self._month, self._day, self.maxValue)
    # мы переопределили метод из родительского класса

    def addGuest(self, guest):
        self._invited.append(guest)
    # добавляет гостя

    def removeGuest(self, guest):
        if guest in self._invited:
            self._invited.remove(guest)
        else:
            print("такого гостя не было")
    # удаляет гостя


class someProps(event):

    def __init__(self, a):
        assert isinstance(
            a, dateClass), "ошибка: входной аргумент не является экземпляром одного из двух наших классов"
        self._obj = a

    @property
    def _isEvent(self):
        if isinstance(self._obj, event):
            return True
        return False
        # проверяет привязано ли событие к дате

    @property
    def _maxValue(self):
        if not isinstance(self._obj, event):
            return 0
        else:
            return len(self._obj._invited)
        # проверяет КОЛИЧЕСТВО ГОСТЕЙ (переопределено)

    @property
    def _getSeason(self):
        if self._obj._month in [12, 1, 2]:
            a = "зима"
        elif self._obj._month in [3, 4, 5]:
            a = "весна"
        elif self._obj._month in [6, 7, 8]:
            a = "лето"
        else:
            a = "осень"
        return a
    # указывает время года

    def __str__(self):
        return " \n праздник: {} \n сезон: {} \n число гостей: {} \n".format(
            self._isEvent, self._getSeason, self._maxValue)
        # снова переопределяет метод суперкласса


if __name__ == "__main__":
    try:

        FILENAME = "states.txt"
        with shelve.open(FILENAME) as states:

            one = dateClass()
            two = dateClass(28, 12, 2020)
            a = input("введите значение-день для третьего объекта: ")
            b = input("введите значение-месяц для третьего объекта: ")
            c = input("введите значение-год для третьего объекта: ")
            three = dateClass(a, b, c)
            custom = event(31, 12, 2020, "new year")
            a = input("введите количество гостей на празднике: ")
            for i in range(0, int(a)):
                b = input("введите имя гостя номер " + str(i + 1) + ": ")
                custom.addGuest(str(b))
            c = input(
                "введите имя любого гостя, которого нужно вычеркнуть из списка приглашенных: ")
            custom.removeGuest(c)

            check_three = someProps(three)
            check_custom = someProps(custom)

            states["1"] = one
            states["2"] = two
            states["3"] = three
            one.plusFive
            two.plusFive
            three.plusFive
            states["4"] = one
            states["5"] = two
            states["6"] = three
            states["7"] = one.isLeap
            states["8"] = two.isLeap
            states["9"] = three.isLeap
            states["10"] = custom
            states["11"] = check_three
            states["12"] = check_custom

            print(
                "\n все объекты со всеми необходимыми данными записаны в файл states.txt \n")

            print("\n получение данных объектов из файла states.txt: \n")

            print("\n обьект со значениями по умолчанию: ", states["1"])
            print("\n обьект со значениями-константами: ", states["2"])
            print("\n обьект со значениями с клавиатуры: ", states["3"])
            print(
                "\n обьект со значениями по умолчанию со значением даты, увеличенной на 5 дней: ",
                states["4"])
            print(
                "\n обьект со значениями-константами со значением даты, увеличенной на 5 дней: ",
                states["5"])
            print(
                "\n обьект со значениями с клавиатуры со значением даты, увеличенной на 5 дней: ",
                states["6"])
            print(
                "\n проверка на високосный год обьекта со значениями по умолчанию: ",
                states["7"])
            print(
                "\n проверка на високосный год обьекта со значениями-константами: ",
                states["8"])
            print(
                "\n проверка на високосный год обьекта со значениями с клавиатуры: ",
                states["9"])
            print(
                "\n объект-мероприятие с приглашенными гостями: ",
                states["10"])
            print(
                "\n объект-проверка обьекта со значениями с клавиатуры, увеличенными на 5: ",
                states["11"])
            print("\n объект-проверка обьекта-мероприятия: ", states["12"])

    except examExcep:
        print("ошибка: некорректное числовое значение для даты\n")

    except Exception as e:
        print(e)
