import styled from 'styled-components'

import { createGlobalStyle } from "styled-components";



export const Colors = {
    pink: '#E92569',
    white: '#FFFFFF',
    black: '#0A0A0A',
    gray: '#767676',
    lightGray: '#C7C7C7',
    darkgray: '#767676',
    gradient: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(229,229,229,1) 100%);'
}

export const Fonts = {
    lato: "'Lato', sans-serif;",
    playfair: "'Playfair Display', serif;"
}


export const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        text-decoration: 0;
        font-family: ${Fonts.lato};
    }

    h1 h2 {
        font-family: ${Fonts.playfair};
    }


    body {
        background: ${Colors.gradient};
    }
    
`







