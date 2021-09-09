import pandas as pd  

data = pd.read_csv('train.csv')
	
data = pd.DataFrame(data, columns=['Name'])

a = list(map(lambda x: x[0].split('. ')[1].split(' ')[0], data.values))
#получили имена

b = list( dict.fromkeys(a) )
#удалили дубликаты

c = list(map(lambda x: [x,a.count(x)], b))
#список имен с их количеством (без дубликатов)

#print(c)

topNames = []

for i in range(0,10):
	tog = 0
	for j in range(0,len(c)):
		if c[j][1]>=c[tog][1]:
			tog=j
	topNames.append(c[tog])
	c.remove(c[tog])


for i in range(0,len(topNames)):
	print(f"name {topNames[i][0]} was {topNames[i][1]} times")
			 




