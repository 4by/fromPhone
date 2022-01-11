import pandas as pd  
data = pd.read_csv('train.csv')
#data = pd.DataFrame(data, columns=['Sex', 'Survived'])
def showNumber(filters):
	output = data
	for i in filters:
		output = output[output[i[0]] == i[1]]
	return len(output.index)
	
	
for i in ['S', 'Q', 'C']:
		print(f'passangers in port: {i}:')
		personAtAll = [['Embarked', i]]
		survivePerson = [['Survived', 1], ['Embarked', i]]
		share = showNumber(survivePerson)/showNumber(personAtAll)
		print(f'percent of survived: {100*share} from {showNumber(personAtAll)} persons')
		
		
		
		
		
		
		
		
		
		print('\n')


print('вопрос не понятен: нужна зависимость смертности от порта без учета других факторов или же с учётом? Если с учётом, то технически возможно трактовать перевес цифр в ту или иную сторону обосновывая это любыми фактами, например номером билета или даже именем, и технически это не является ошибкой')
print('в идеале можно сделать так - выявить степень влияния каждого фактора (такой алгоритм непростой, если он вообще существует) и основываться на этом(а также ссылаться на это)')
print('я не думаю, что это в задании требуется от меня, поэтому я дам ответ без учёта других факторов')

print ('\nОтвет(без учёта других факторов): достаточно большая выборка позволяет сказать, что у тех кто сел в порте Cherbourg - самая низкая смертность. Но мы понимаем, что это обуславливается в первую очередь полом и классом. В остальных двух портах примерно одинакова.')









