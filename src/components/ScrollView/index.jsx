import React from 'react';
import { Container, Left, Right} from './styles.jsx';
import Product from '../ProductOverview';

export default function ScrollView({ history }){
    return (
        <>
            <Container>
            {Array.from(Array(3).keys()).map((n) =>(
                <Product
                name = "Conserto de tela Iphone"
                price = "99,99"
                shortDescription = "Conserto telas Iphone por 99,99"
                />
            ))}          
            </Container>
            <Container>
            {Array.from(Array(3).keys()).map((n) =>(
                <Product
                name = "Conserto de tela Iphone"
                price = "99,99"
                shortDescription = "Conserto telas Iphone por 99,99"
                />
            ))}
            </Container>
        </>
    )
};