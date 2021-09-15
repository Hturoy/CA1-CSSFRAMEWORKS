import styled from 'styled-components'
import { Colors } from '../../global'
import { Fonts } from '../../global'


const Wrapper = styled.div ` 
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 100px;
`

const LogoWrapper = styled.div `
    color: ${Colors.pink};
    font-style: italic;
    display: flex;
    justify-content: center;
    width: 168px;

    h1 {
        font-size: 20px;
        font-family: ${Fonts.playfair};
    }
`

const ContentWrapper = styled.div `
    display: flex;
    flex-direction: row;
    padding-left: 50px;
    a {
        color: black;
        margin: 10px;
    }
`



const Header = () => {
    



    return (
        <>
        <Wrapper>

            <LogoWrapper>
                <h1>The Yay Company</h1>
            </LogoWrapper>

            <ContentWrapper>
            <a href="#">Home</a>
            <a href="#">News</a>
            <a href="#">Contact</a>
            </ContentWrapper>
        </Wrapper>
        </>
    )
}

export default Header