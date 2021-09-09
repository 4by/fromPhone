import pandas as pd  
data = pd.read_csv('train.csv')
#data = data.select_dtypes(['number'])
#numeric = data.select_dtypes(include ='number').columns

def filt(filters):
	output = data
	for i in filters:
		output = output[output[i[0]] == i[1]]
	return output
	

for i in ['male', 'female']:
	print(f'average in {i}: ')
	sex = filt([['Sex', i]])
	print(sex.mean())
	



