import pandas as pd  

data = pd.read_csv('train.csv')

def showNumber(filters):
	output = data
	for i in filters:
		output = output[output[i[0]] == i[1]]
	return len(output.index)
	
def counting(factors):
	factsDict = {}
	for i in factors:
		print(f'Factor: {i}')
		vars = (list(dict.fromkeys(data[i].values)))
		varList = []
		for j in vars:
			personAtAll = [[i, j]]
			survivePerson = [['Survived', 1], [i, j]]
			if showNumber(personAtAll)<=1:
				continue
			share = showNumber(survivePerson)/showNumber(personAtAll)
			varList.append([j,share])
			print(f'{j} | share of survived: {share} from {showNumber(personAtAll)} persons \n')
			
		factsDict[i]=varList
	return factsDict
	
	
print(' \n Данные по определяющим (насколько можно сделать субъективный вывод при данной выборке) факторам из train.csv: \n')
print(' будем считать выборки из одного человека неинформативными и не учитывать их \n')

factors1=["Pclass","Sex","SibSp", "Age"]
factDict = (counting(factors1))



#print(factDict)



print('возраст сгруппируем по 10-летиям и найдем среднее. Не вошедшим большим возрастам дадим долю 0.3')
factDict['Age'] = list(map(lambda x: [x[0]//10, x[1]], factDict['Age']))
newAgeList=[]
for i in range (0,7):
	a = 0
	sc = 0
	for j in factDict['Age']:
		if j[0] == i:
			sc +=1
			a+=j[1]
	newAgeList.append([i,a/sc])
newAgeList.append([i+1,0.3])
newAgeList.append([i+2,0.3])
#добавили не вошедшие в статистику возрасты
factDict['Age'] = newAgeList


print('далее предположим, что после 4-го родственника шанс уменьшается на 0.09 \n')
newSibSpList=[]
for i in range (0,9):
	for j in factDict['SibSp']:
		if (j[0] == i):
			newSibSpList.append([i,j[1]])
	if (len(newSibSpList)-1<i):
		a=newSibSpList[len(newSibSpList)-1][1]-0.09
		if (a>0):
			newSibSpList.append([i,a])
		else:
			newSibSpList.append([i,0])
factDict['SibSp'] = newSibSpList	


def compar(fact,var):
	for i in factDict[fact]:
		if (i[0] == var):
			return i[1]
#возвращает коэффициент в зависимости от варианта данного фактора


print('сопоставим получившиеся коэффициенты с условием: выжил/не выжил')
print('для этого заполним медианами отсутствующие поля с возрастом')


data['Age'] = data['Age'].fillna(data['Age'].median())

findCoeffListAlive=[]
findCoeffListDead=[]
for i in range(0, len(data)):
	sumOfCoeff = compar('Sex',data.Sex[i])+compar('Pclass',data.Pclass[i])+compar('Age',data.Age[i]//10)+compar('SibSp',data.SibSp[i])
	if (data.Survived[i] == 1):
		findCoeffListAlive.append(sumOfCoeff)
	else:
		findCoeffListDead.append(sumOfCoeff)


coeffAlive = sum(findCoeffListAlive)/len(findCoeffListAlive)
coeffDead = sum(findCoeffListDead)/len(findCoeffListDead)

print(f'средние значения коэффициентов: для выживших: {coeffAlive}, для умерших: {coeffDead}')		
coeff = (coeffAlive+coeffDead)/2
print(f'будем считать достаточный коэффициент для выжившего начиная от среднего между двумя этими коэффициентами: {coeff}')

data = pd.read_csv('test.csv')

print('в новом файле: используем получившиеся коэффициенты для вывода условия: выжил/не выжил')
print('для этого заполним медианами отсутствующие поля с возрастом')

data['Age'] = data['Age'].fillna(data['Age'].median())

sumOfCoeff = []
for i in range(0, len(data)):
	sumOfCoeff.append(compar('Sex',data.Sex[i])+compar('Pclass',data.Pclass[i])+compar('Age',data.Age[i]//10)+compar('SibSp',data.SibSp[i]))
	
isAlive = list(map(lambda x: 1 if x>coeff else 0, sumOfCoeff))
data['Survived'] = isAlive
data.to_csv('Result.csv',index=False)
print(data)
print('результат выгружен в файл Result.csv')