import logo from '../../images/logo.png';
import './style.css'

function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='logo-imagens de livros' className='ImgLogo'></img>
            <p><strong>Virtual</strong>Books</p>
        </div>
    )
}

export default Logo