import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.png'


export const GlobalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        --white: #F2F2F2;
        --orange: #F9A826;
        --blue-1: #2F527B;
        --blue-2: #1D355D;
        --light-purple: #6066d0cc;
        --pink: #EA8282;
        --green: #60BF88;
    }

    body {
        color: var(--white);
        background-image: url('${background}');
        background-size: cover; 
    }
    
    *, button, input, textarea {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
    }
`;