import styled from 'styled-components'
import Logo from '../logo'
import IconsHeader from '../headerIcons'
import OptionsHeader from '../headerOptions'

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

function Header() {
    return(
        <HeaderContainer>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </HeaderContainer>
    )
}

export default Header