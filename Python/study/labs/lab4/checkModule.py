import dataModule
import eventModule


class someProps(eventModule.event):

    def __init__(self, a):
        try:
            if not isinstance(a, dataModule.dateClass):
                raise Exception("error: it is not example of our class")
            self._obj = a
        except Exception as e:
            print(e)

    @property
    def _isEvent(self):
        if isinstance(self._obj, eventModule.event):
            return True
        return False
        # проверяет привязано ли событие к дате

    @property
    def _maxValue(self):
        if not isinstance(self._obj, eventModule.event):
            return 0
        else:
            return len(self._obj._invited)
        # проверяет КОЛИЧЕСТВО ГОСТЕЙ (переопределено)

    @property
    def _getSeason(self):
        if self._obj._month in range(1, 4):
            a = "зима"
        elif self._obj._month in range(4, 7):
            a = "весна"
        elif self._obj._month in range(7, 10):
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
        one = dataModule.dateClass()
        two = eventModule.event()
        two.addGuest("Masha")
        check_one = someProps(one)
        check_two = someProps(two)

        print(check_one)
        print(check_two)

    except Exception as e:
        print(e)
