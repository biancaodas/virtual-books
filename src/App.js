import Logo from './components/logo/index.js'
import './App.css';
import Perfil from './images/perfil.svg'
import Shopp from  './images/shopp.svg'


const OptionsText = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE']
const Icons = [Perfil, Shopp]

function App() {
  return (
    <div className='App'>
      <header className='AppHeader'>
        <Logo></Logo>
        <ul className='Options'>
          {OptionsText.map( (text) => (
            <li className='OptionHeader'><p>{text}</p></li>
          ) ) }
        </ul>

        <ul className='Icons'>
          {Icons.map (  (icon)  => (
            <li className='IconsList'><img src={icon}></img></li>
          )) }
        </ul>
      </header>
    </div>
  );
}

export default App
