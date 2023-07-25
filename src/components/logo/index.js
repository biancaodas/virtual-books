import logo from '../../images/logo.png';
import styled from 'styled-components'

const LogoContainer = styled.div `
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img `
    width: 50px;
    height: 50px;
    margin-right: 10px;
    margin-top: 27px;  
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo-imagens de livros'/>
            <p><strong>Virtual</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo