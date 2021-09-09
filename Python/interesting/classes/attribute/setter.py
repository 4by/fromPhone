class Person:

    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, age):
        if age in range(1, 100):
            self.__age = age
        else:
            print("Недопустимый возраст")


tom = Person()
tom.age = -3486
tom.age = 36
print(tom.age)

# setter не работает без getter
# без @(...).setter на закрытые свойства
# было бы не obj.prop=x,
# а obj.methodName(x)
