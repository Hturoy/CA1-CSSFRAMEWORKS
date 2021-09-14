import styled from 'styled-components'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
    }

    
`




export const Colors = {
    pink: '#E92569',
    white: '#FFFFFF',
    black: '#0A0A0A',
    gray: '#767676',
    lightGray: '#C7C7C7',
    darkgray: '#767676',
    gradient: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(229,229,229,1)'
}

export const Fonts = {
    lato: "font-family: 'Lato', sans-serif;",
    playfair: "font-family: 'Playfair Display', serif;"
}


