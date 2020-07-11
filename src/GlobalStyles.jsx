 
import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    *, button, input{
        border: 0;
        outline: 0;

        font-family: 'Roboto', sans-serif !important;
    }

    html, body, #root{
        heigth: 100%;
    }

    :root {       
        --white: #fff;
        --gray: #8a8c90;
        --chat-input: rgb(64,68,75);
        --symbol: #74777a;
     
        --notification: #f84a4b;
        --mention-detail: #f9a839;
        --mention-message: #413f3f;
     
        --link: #5d80d6;
     
        --dark-blue: #020225;
        --light-blue: #202b8c;
        --dark-purple: #241b59
        --medium-purple: #4e2c47;
        --soft-purple: #984fa5;
        --light-purple: #a989dc;
      }
`;