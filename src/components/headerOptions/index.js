import styled from 'styled-components'

const Option = styled.ul `
    display: flex;
`

const OptionHeader = styled.li `
    font-size: 16px;
    display: flex;
    min-width: 120px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const OptionsText = ['CATEGORIAS', 'FAVORITOS','MINHA ESTANTE']

function OptionsHeader() {
    return(
        <Option>
            {OptionsText.map( (text) => (
                <OptionHeader><p>{text}</p></OptionHeader>
            ) ) }
      </Option>
    )
}

export default OptionsHeader