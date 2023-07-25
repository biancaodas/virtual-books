import styled from 'styled-components'
import Perfil from '../../images/perfil.svg'
import Shopp from  '../../images/shopp.svg'

const IconsLi = styled.li` 
    margin-right: 40px;
    width: 25px;
`

const IconsUl = styled.ul` 
    display: flex;
    align-items: center;
    cursor: pointer;
`

const Icons = [Perfil, Shopp]

function IconsHeader() {
    return (
        <IconsUl>
            {Icons.map (  (icon)  => (
                <IconsLi><img src={icon}></img></IconsLi>
            )) }
      </IconsUl>
    )
}

export default IconsHeader