import './style.css'

const OptionsText = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE']

function OptionsHeader() {
    return(
        <ul className='Options'>
            {OptionsText.map( (text) => (
                <li className='OptionHeader'><p>{text}</p></li>
            ) ) }
      </ul>
    )
}

export default OptionsHeader