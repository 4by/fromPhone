x = 0b101
# 5
y = 0x0a
# 10
z = x + y
# 15

# 0b - двоичная
# 0a - восьмериричная
# 0x - шестнадцетиричная

print("{0} in binary {0:08b} in hex {0:02x} in octal {0:02o}".format(z))

# 0:08b: номер переменной, 0b - двоичная, 8 - число знаков после запятой