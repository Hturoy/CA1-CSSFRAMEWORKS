import styled from 'styled-components'
import variables from '../../sass/partials/_layout.scss'

const Wrapper = styled.div ` 
    background-color: ${variables.$lightgray};
    width: 100%;
    height: 70px;

`

const Header = () => {
    



    return (
        <>
        <Wrapper/>
        </>
    )
}

export default Header