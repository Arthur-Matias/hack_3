#!/usr/bin/env python
# coding: utf-8

# ## Importação das bibliotecas

# In[1]:


import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib.cm as cm
from sklearn.preprocessing import MinMaxScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.metrics import silhouette_samples, silhouette_score
from sklearn.ensemble import RandomForestClassifier
from collections import Counter


# ## Carregamento da base de dados

# In[2]:


df = pd.read_excel('Tabela IA.xlsx')


# In[3]:


df.shape


# In[4]:


for i, column in enumerate(df.columns):
  print(i, column)


# In[5]:


df.head()


# In[6]:


for i, column in enumerate(df.columns):
  print(i, column)


# ### Valores faltantes

# In[7]:


df.isna().sum(axis = 0)


# In[8]:


df.isna().sum(axis = 0)


# ## Inspecionando as estatísticas

# In[9]:


def hist_boxplot(feature):
  fig, ax = plt.subplots(1, 2)
  ax[0].hist(feature)
  ax[1].boxplot(feature)


# In[10]:


df_describe = df.describe()
df_describe


# A informação acima nos mostra que quanto mais disperso, melhor para se criar uma categorização
# 

# ## Tratamento dos dados para o Hack

# In[11]:


df.dtypes


# In[12]:


df.dtypes[(x not in ['int64', 'float64'] for x in df.dtypes)]


# ## Preparação da base de dados para agrupamento

# In[13]:


df.head()


# In[14]:


df_factorized = df.apply(lambda x : pd.factorize(x)[0])
df_label = df.apply(lambda x : tuple(pd.factorize(x)[1]))


# ## Agrupamento com K-Means

# ### Escolha do número de clusters com WCSS

# In[15]:


wcss = []
K = range(1, 15)
for k in K:
  km = KMeans(n_clusters = k)
  km = km.fit(df_factorized)
  wcss.append(km.inertia_)


# In[16]:


wcss


# In[17]:


def optimal_number_of_clusters(wcss):
    from numpy import sqrt
    x1, y1 = 2, wcss[0]
    x2, y2 = 20, wcss[len(wcss)-1]

    distances = []
    for i in range(len(wcss)):
        x0 = i+2
        y0 = wcss[i]
        numerator = abs((y2-y1)*x0 - (x2-x1)*y0 + x2*y1 - y2*x1)
        denominator = sqrt((y2 - y1)**2 + (x2 - x1)**2)
        distances.append(numerator/denominator)
    
    return distances.index(max(distances)) + 2

n_clusters_obtained = optimal_number_of_clusters(wcss)
print(n_clusters_obtained,"Clusters para se ter")


# In[18]:


plt.plot(K, wcss, 'bx-')
plt.xlabel('k')
plt.ylabel('WCSS')
plt.title('Método de Elmbow para otimização do valor k de classificação');


# ### Redução de dimensionalidade com PCA (Principal Component Analisys)

# In[19]:


pca = PCA(n_components=2)
df_pca = pca.fit_transform(df_factorized)


# In[20]:


df_pca


# In[21]:


df_factorized.shape


# In[22]:


df_factorized.head()


# In[23]:


df_pca.shape


# In[24]:


pca.explained_variance_ratio_


# In[25]:


exp_var = [round(i, 1) for i in pca.explained_variance_ratio_ * 100]
exp_var


# - Leva em consideração a coesão e a separação
# - Coesão: medida de distância de um ponto para todos os outros pontos do mesmo grupo
# - Separação: medida de distância de um ponto com os pontos dos outros clusters
# - O coeficiente está no intervalo de [-1, 1]
# - O valor -1 indica que o cluster está ruim (registros em grupos "errados")
# - O valor 0 indica "indiferença" (em cima da linha de decisão, um cluster ao lado do outro)
# - O valor 1 indica que os cluster estão bem distantes

# Código baseado na documentação: https://scikit-learn.org/stable/auto_examples/cluster/plot_kmeans_silhouette_analysis.html

# ### Aplicação do k-means

# In[26]:


# Retirando a label de saida
df_factorized_dropped = df_factorized.iloc[:,:-1]
df_factorized_dropped


# In[27]:


km = KMeans(n_clusters = n_clusters_obtained, n_init=100, random_state=0)
km.fit(df_factorized_dropped)


# In[28]:


print(km.cluster_centers_)


# In[29]:


print(np.unique(km.labels_))


# In[30]:


len(km.labels_)


# ## Relacionamento entre os grupos e as posições

# In[31]:


groups = km.labels_
position = range(len(groups))
compar = []
for i in range(0, len(position)):
  elem = tuple((position[i], groups[i]))
  compar.append(elem)


# In[32]:


df['Grupo gerado por Kmean'] = groups


# In[33]:


df


# In[34]:


df.to_excel('table_Preclassified.xlsx', index = False)
import pickle
with open('Kmean.sav','wb') as file:
    pickle.dump(km,file)


# In[ ]:




