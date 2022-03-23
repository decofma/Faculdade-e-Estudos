import pandas as pd
data = pd.read_csv(r'base-de-dados.csv')
data.head()
data.tail()
data.sample(5)
data.Weightvar = data.Weightvar * 5
data
data.T