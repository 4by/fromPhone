import pandas as pd  
data = pd.read_csv('train.csv')
#data = pd.DataFrame(data, columns=['Sex', 'Survived'])
def showNumber(filters):
	output = data
	for i in filters:
		output = output[output[i[0]] == i[1]]
	return len(output.index)
	
	
for i in range(1,4):
	print(f'in class {i}:')
	for j in ['male', 'female']:
		personAtAll = [['Sex', j], ['Pclass', i]]
		survivePerson = [['Survived', 1],['Sex', j], ['Pclass', i]]
		share = showNumber(survivePerson)/showNumber(personAtAll)
		print(f'percent of survived {j}: {100*share} ')
	print('\n')










