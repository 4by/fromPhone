def isUnical(l):
    for i in range(0, len(l) - 1):
        for j in range(i + 1, len(l) - 1):
            if l[i] == l[j]:
                return False
    return True


l = input("введите значения для списка через пробел ").split()

print(isUnical(l))
