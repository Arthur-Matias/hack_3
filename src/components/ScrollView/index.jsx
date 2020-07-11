import React from 'react';
import { Container} from './styles.jsx';
import Product from '../Product';

export default function ScrollView({ history }){
    return (
        <>
            <Container>
                    <Product
                            name = "Conserto de tela Iphone"
                            price = "99,99"
                            short-description = "Conserto telas Iphone por 99,99"
                        />
                        <Product
                            name = "Conserto de tela Iphone"
                            price = "99,99"
                            short-description = "Conserto telas Iphone por 99,99"
                        />
                        <Product
                            name = "Conserto de tela Iphone"
                            price = "99,99"
                            short-description = "Conserto telas Iphone por 99,99"
                        />
                        <Product
                            name = "Conserto de tela Iphone"
                            price = "99,99"
                            short-description = "Conserto telas Iphone por 99,99"
                        />
            </Container>
        </>
    )
};