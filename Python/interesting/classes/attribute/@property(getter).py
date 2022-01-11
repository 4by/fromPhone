class Person:
    def __init__(self, name):
        self.__name = name  # устанавливаем имя

    def name(self):
        return self.__name

    @property
    def name2(self):
        return self.__name


tom = Person("Tom")
print(tom.name())
print(tom.name2)

# это позволяет вызывать метод без "()"
