import styled from 'styled-components'
import { Colors } from '../../global'

export const Wrapper = styled.div `
    display: flex;
    flex-direction: row;
    height: 37px;
    width: 245px;
    border-radius: 5px;
    background-color: white;
    float: right;
`

export const Input = styled.input `
    width: 202px;
    height: 36px;
    border: 0;
`

export const SearchButton = styled.button `
    width: 43px;
    height: 36px;
    background-color: ${Colors.pink};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    color: white;
    border: 0;
`



const Searchbar = () => {



    return (
        <>  
            <Wrapper>
                <Input placeholder='Search'></Input>
                <SearchButton>Go</SearchButton>
            </Wrapper>
        </>   
    )
}

export default Searchbar