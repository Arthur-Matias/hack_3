#!/usr/bin/env python
# coding: utf-8

# In[9]:


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

import dbo
from flask import Flask, request,jsonify

dbo_data = dbo.load_data()


amostra = {
    'Idade' : '22 anos',
    'Sexo' : 'Masculino',
    'Produto' : 'Pizza',
}
example = list(amostra.values())
example

def predict(data = example):
    amostra = data
    with open('Logistic.sav','rb') as file:
        log = pickle.load(file)
    categories = log['categorie']
    softmax_reg = log['model']

    with open('Kmean.sav','rb') as file:
        kmean = pickle.load(file)

    softmax_reg = log['model']
    cat = log['categorie']

    amostra_numeric = list()
    for k,v in amostra.items():
        x=cat[k]
        #print(x)
        u = np.where(np.array(cat[k]) == v)[0][0]
        print(u)
        amostra_numeric.append(u)

    amostra_numeric_array = np.array(amostra_numeric).reshape(1,-1)

    amostra_numeric_array

    grupo = kmean.predict(amostra_numeric_array)[0]

    ar = list(amostra_numeric_array.ravel())
    ar.append(grupo)
    amostra_numeric_array = np.array(ar).reshape(1,-1)

    amostra_numeric_array

    prediction = (softmax_reg.predict_proba(amostra_numeric_array) * 100).ravel()

    prediction

    table_probability  = pd.DataFrame(data = {
        'label' : list(cat['Acompanhamento']),
        'probabilidade' :[*list(prediction),],
    })
    table_probability.set_index('label').plot(kind = 'bar', figsize = (18,6))
    to_return = table_probability.set_index('label').to_dict()

    return to_return


if __name__ == '__main__':
    app = Flask(__name__)

    @app.route("/")
    def index():
        return "API Working.."

    @app.route('/prediction',methods = ['POST'])
    def info():
        data = request.get_json()
        print(data)
        print(dict(data))
        data = dict(data)
        try:
            resultado = predict(data = data)
            return resultado
        except:
            return {
                'status' : 'no recommendation',
            }


    @app.route('/insertProduct',methods = ['POST'])
    def insertProduct():
        data = request.get_json()
        data = dict(data)
        dbo_data['Market'].append(data)
        return {
            'status' : 'ok'
        }
 
    @app.route('/disposable',methods = ['POST'])
    def disposable():
        data = request.get_json()
        

        for ind,value in enumerate(dbo_data['Deliver']):
            if value['name'] == data['name']:
                dbo_data['Deliver'][ind]['disposable'] = data['disposable']

        return {
            'status' : 'ok'
        }


    @app.route('/buy',methods = ['POST'])
    def buy():
        data = request.get_json()        
        for ind,value in enumerate(dbo_data['Market']):
            if value['nome'] == data['nome']:
                del dbo_data['Market'][ind]


    # list 
    @app.route('/listDisposableDeliveres')
    def listDisposableDeliveres():
        return jsonify(dbo_data['Deliver'])


    # list 
    @app.route('/market')
    def market():
        return jsonify(dbo_data['Market'])


    app.run()



# %%
