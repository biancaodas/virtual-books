import './style.css'
import Perfil from '../../images/perfil.svg'
import Shopp from  '../../images/shopp.svg'


const Icons = [Perfil, Shopp]

function IconsHeader() {
    return (
        <ul className='Icons'>
            {Icons.map (  (icon)  => (
                <li className='IconsList'><img src={icon}></img></li>
            )) }
      </ul>
    )
}

export default IconsHeader