import pandas as pd 
data = pd.read_csv('train.csv')

am = data['Age'].median()

data['Age'] = data['Age'].fillna(am)

data.to_csv('newTrain.csv',index=False)

#значение NaN в 'Cabin' не изменены, так как для этого столбца найти медиану невозможно