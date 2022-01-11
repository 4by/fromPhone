import dataModule


class event(dataModule.dateClass):

    def __init__(self, day=1, month=1, year=1, name="", inv=[]):
        try:
            if not isinstance(name, str):
                raise Exception("error: bad name of event")
            self._eventName = name
            self._invited = inv
        except Exception as e:
            print(e)
        super().__init__(day, month, year)
      # демонстрация вызова конструктора родительского класса

    def __str__(self):
        return "\n событие: {} \n приглашенные: {} \n дата: {}.{}.{}\n".format(
            self._eventName, self._invited, self._year, self._month, self._day)
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


if __name__ == "__main__":
    try:
        custom = event(31, 12, 2020, "new year")
        custom.addGuest("Jenya")
        custom.addGuest("Santa")
        custom.addGuest("Clara")
        custom.removeGuest("Clara")
        print(custom)

        print("количество дней в месяце: ", custom.maxValue)
        # метод унаследован
    except Exception as e:
        print(e)
