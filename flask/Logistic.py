#!/usr/bin/env python
# coding: utf-8

# In[1]:


import numpy as np
import pandas as pd
import pandas as pd
import numpy as np
import os
import pickle
from pandas.plotting import scatter_matrix
from itertools import permutations
from sklearn.neural_network import MLPClassifier
from sklearn import preprocessing
from sklearn.linear_model import LogisticRegression


# In[2]:


_DATA = "table_Preclassified.xlsx"
_IGNORE_KMEAN = False


# In[3]:


table = pd.read_excel(_DATA)


# In[4]:


table.info()
new_datetime_filtered = table


# In[5]:


table


# In[6]:


#if _IGNORE_KMEAN:
#    new_datetime_filtered = new_datetime_filtered.drop(columns = 'Grupo gerado por Kmean')


# In[7]:


new_datetime_filtered


# In[8]:


#Configurando os tipos
new_datetime_filtered.dtypes
for ind,value in new_datetime_filtered.items():
    if value.dtypes == 'object':
        new_datetime_filtered[ind] = new_datetime_filtered[ind].str.strip()


# In[9]:


#Configurando os tipos
new_datetime_filtered.dtypes
for ind,value in new_datetime_filtered.items():
    if value.dtypes == 'object':
        new_datetime_filtered[ind] = new_datetime_filtered[ind].astype('category')  


# In[10]:


new_datetime_filtered.info()


# In[11]:


table_dropped = new_datetime_filtered.dropna()


# In[12]:


table_dropped


# In[13]:


#ndmdi_factorized = table_dropped.iloc[:,[0,1,2,]].apply(lambda x : pd.factorize(x)[0])
ndmdi_factorized = table_dropped.drop(columns = 'Acompanhamento').apply(lambda x : pd.factorize(x)[0])
ndimi_label = table_dropped.apply(lambda x : pd.factorize(x)).iloc[1,:]


# In[14]:


#temp = table_dropped.iloc[:,[3]].apply(lambda x : pd.factorize(x))
temp = table_dropped.loc[:,['Acompanhamento']].apply(lambda x : pd.factorize(x))
ndmdo_label = temp.iloc[1,0]
ndmdo_factorized = temp.iloc[0,0]


# In[15]:


X = ndmdi_factorized.values
X


# In[16]:


y = ndmdo_factorized
y


# In[17]:


if _IGNORE_KMEAN:
    X = X[:,:-1]


# In[18]:


X


# In[19]:


# Criando o modelo
from sklearn import datasets
softmax_reg = LogisticRegression(multi_class = "multinomial", solver = "lbfgs",C = 10)
softmax_reg.fit(X,y)


# In[20]:


import pickle
with open('logistic.sav','wb') as file:
    pickle.dump({'model' : softmax_reg, 'categorie' : ndimi_label},file)

