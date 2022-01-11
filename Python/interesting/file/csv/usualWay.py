import csv
FILENAME = "users.csv"
users = [
    ["Tom", 28],
    ["Alice", 23],
    ["Bob", 34]
]
with open(FILENAME, "w") as file:
    writer = csv.writer(file)
    writer.writerows(users)

with open(FILENAME, "a") as file:
    user = ["Sam", 31]
    writer = csv.writer(file)
    writer.writerow(user)

with open(FILENAME, "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row[0], " - ", row[1])
