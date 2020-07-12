import React from 'react';
import { Container, ContainerTest, Left, Right} from './styles.jsx';
import Product from '../ProductOverview';
import {useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import { useLocation } from "react-router-dom";


export default function ScrollView(propriedades){
    /*
        Componente que colocar o MarketPlace
        MarketPlace compoment
    */
    React.useEffect(() => {
        //handleScreen({});
    })
    const history = useHistory()

    

    function handleManicure(){
        
        history.push('/produtoMassagista')
    }

    function handleMassagista() {
        history.push('/produtoManicure')
    }
    /*
            {Array.from(Array(6).keys()).map((n) =>(
                        <Product id = "procuct_id"
                        name = "Conserto de tela Iphone"
                        price = "99,99"
                        shortDescription = "Conserto telas Iphone por 99,99"
                        onClick = {() => createContext()}
                        />  
            ))}      
    */
    return (
        // Será que dá para colocar um click evento?
        <>
            <Container>
                <Product id = "procuct_id"
                            name = "Manicure"
                            price = "35"
                            shortDescription = "Uma manicure"
                            onClick = {() => handleManicure()}
                            />  
                <Product id = "procuct_id"
                            name = "Massagista"
                            price = "150"
                            shortDescription = "Um ótimo massagista"
                            onClick = {() => handleMassagista()}
                            />  
            </Container>
            
        </>
    )
};