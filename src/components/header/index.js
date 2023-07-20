import './style.css'
import Logo from '../logo'
import IconsHeader from '../headerIcons'
import OptionsHeader from '../headerOptions'

function Header() {
    return(
        <header className='AppHeader'>
            <Logo/>
            <OptionsHeader/>
            <IconsHeader/>
        </header>

    )
}

export default Header