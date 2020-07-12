import base64

def convert_image(image):
    data_file = image.read()
    base64_encoded_data = base64.b64encode(data_file)
    base64_message = base64_encoded_data.decode('utf-8')
    return base64_encoded_data
    #return base64_message

def open_file(file_name):
    with open(file_name,'rb') as file:
        data = convert_image(file)
    return data

with open('logo-ubuntu.jpg','rb') as file:
    img1 = convert_image(file)


Market = [
    {
        "nome" : None,
        "long_description" : None,
        "short_description" : None,
        "base64imagem" : None, #Converter imagem para base64
        "price" : "56.25",
        "location" : [0.0,0.0],
    },
]


Deliver = [
    {
        "name" : "Augusto Comte",
        "long_description" : "Bom motorista, sempre atento",
        "short_description" : "Bom motorista, sempre atento",
        "base64imagem" : None, #Converter imagem para base64
        "price_per_km" : "0.23",
        "location" : [23.45,46.45],
        "disposable" : False,
    },
    {
        "name" : "Josana Ribeira da Silva Sauro",
        "long_description" : "Ama entregar produtos ao meio dia",
        "short_description" : "Ama entregar produtos ao meio dia",
        "base64imagem" : None, #Converter imagem para base64
        "price_per_km" : "0.32",
        "location" : [45.56,45.16],
        "disposable" : True,
    },
    {
        "name" : "Você",
        "long_description" : "Na verdade não faço entregas, apenas estou testando o aplicativo",
        "short_description" : "Na verdade não faço entregas, apenas estou testando o aplicativo",
        "base64imagem" : None, #Converter imagem para base64
        "price_per_km" : "1.48",
        "location" : [45.15,45.84],
        "disposable" : True,
    },
]



def load_data():
    return {
        'Market' : Market,
        'Deliver' : Deliver,
    }