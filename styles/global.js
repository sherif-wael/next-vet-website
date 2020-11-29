import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root{
        --fz-xs: 13px;
        --fz-sm: 14px;
        --fz-md: 16px;
        --fz-lg: 18px;
        --fz-xl: 20px;
        --fz-xxl: 22px;
        --fz-heading: 36px;
    }

    body{
        background-color: var(--color-background);
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        overflow-x: hidden;
        font-size: var(--fz-lg);

        &.hidden{
            main{
                filter: blur(5px);
            }
        }
    }

    *,
    *::after,
    *::before{
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        display: inline-block;
        font-size: var(--fz-md);
    }

    button{
        border: none;
        font-size: var(--fz-md);
    }

    button:focus,
    button:active,
    input:focus,
    input:active{
        outline: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6{
        margin: 0 0 10px 0;
    }

    p{
        margin: 0 0 15px 0;
    }

    main{
        min-height: 100vh;
    }

    .font-round{
        font-family: 'Varela Round', sans-serif;
    }

    img{
        max-width: 100%;
        overflow: hidden;
        height: auto;
        display: block;
    }

    .noselect {
        -webkit-touch-callout: none; /* iOS Safari */
        -webkit-user-select: none; /* Safari */
        -khtml-user-select: none; /* Konqueror HTML */
        -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
                                supported by Chrome, Edge, Opera and Firefox */
    }
`

export default GlobalStyle