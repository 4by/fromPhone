
def notIntersect(*args):
    for a in range(0, len(args)):
        for b in range(a + 1, len(args)):
            for i in range(0, len(args[a])):
                for j in range(0, len(args[b])):
                    if args[a][i] == args[b][j]:
                        return False
    return True


l = input("введите значения для списка 1 через пробел ").split()
p = input("введите значения для списка 2 через пробел ").split()
k = input("введите значения для списка 3 через пробел ").split()

print(notIntersect(l, p, k))
