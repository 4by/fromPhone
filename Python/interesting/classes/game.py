class GameObject:
    objects = {}

    def __init__(self):
        GameObject.objects[self.class_name] = self
        # такой синтаксис для объектов с обьектами производных классов
        # объекты хранятся как свойства, по своему имени

    def get_desc(self):
        return self.class_name + "\n" + self.desc


class Goblin(GameObject):
    def __init__(self, name):
        self.class_name = "goblin"
        self.health = 3
        self._desc = "A foul creature"
        super().__init__()
        # super вызывает метод суперкласса
        # добавили этот производный объект в родительский класс

    @property
    def desc(self):
        if self.health >= 3:
            return self._desc
        elif self.health == 2:
            health_line = "It has a wound on its knee."
        elif self.health == 1:
            health_line = "Its left arm has been cut off!"
        elif self.health <= 0:
            health_line = "It is dead."
        return self._desc + "\n" + health_line

    @desc.setter
    def desc(self, value):
        self._desc = value


def hit(noun):
    if noun in GameObject.objects:
        thing = GameObject.objects[noun]
        if isinstance(thing, Goblin):
            thing.health -= 1
            if thing.health <= 0:
                msg = "You killed the goblin!"
            else:
                msg = "You hit the {}".format(thing.class_name)
    else:
        msg = "There is no {} here.".format(noun)
    return msg


def examine(noun):
    if noun in GameObject.objects:
        return GameObject.objects[noun].get_desc()
    else:
        return "There is no {} here.".format(noun)


def get_input():
    command = input(": ").split()
    verb_word = command[0]
    if verb_word in verb_dict:
        verb = verb_dict[verb_word]
    else:
        print("Unknown verb {}".format(verb_word))
        return

    if len(command) >= 2:
        noun_word = command[1]
        print(verb(noun_word))
        # тем самым мы вызвали функцию
    else:
        print(verb("nothing"))


def say(noun):
    return 'You said "{}"'.format(noun)


verb_dict = {
    "say": say,
    "examine": examine,
    "hit": hit
}

goblin = Goblin("Gobbly")

# print(GameObject.objects."Gobbly")
while True:
    try:
        get_input()
    except EOFError:
        break
