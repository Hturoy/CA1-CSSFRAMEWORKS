import styled from 'styled-components'


const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0 100px 0 100px;
`

const Item = styled.div `
    margin: 10px;
`


const infotext = () => {

    return(
        <Wrapper>
            <Item>
                <h1>We do Yay things</h1>
            </Item>
            <Item>
                <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
            </Item>
        </Wrapper>
    )
    
}

export default infotext