import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1366px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --darkBlue: #00142F;
        --fontSuperBig: 2.5rem;
        --fontBig: 1.5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1rem;
        --black: #000;
    }

    * {
        background: var(---darkBlue);
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        transition: all 0.3s;
    }

    body {
        margin: 0;
        padding: 0;
        transition: all 0.3s;
        background: var(---darkBlue);
    
        h1 {
            font-size: 1.2rem;
            font-weight: 600;
            transition: all 0.3s;
            color: var(--white);
        }

        h3 {
            font-size: 1.1rem;
            font-weight: 600;
            transition: all 0.3s;
        }

        p {
            font-size: 1rem;
            transition: all 0.3s;
            color: var(--white);
        }
  }
`;
