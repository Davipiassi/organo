import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={event => props.aoAlterar(event.target.value)} required={props.obrigatorio} value={props.valor}>
                <option>Selecione</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa