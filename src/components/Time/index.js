import "./Time.css"
import Card from "../Card"

const Time = (props) => {

    const backgroundColor = {backgroundColor: props.corSecundaria}
    const borderBottomColor = {borderBottomColor: props.corPrimaria}

    return(
        (props.colaboradores.length > 0) &&
        <section className="time" style={backgroundColor}>
            <h3 style={borderBottomColor}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                    <Card
                        key={colaborador.nome}
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={props.corPrimaria}
                    />  
                )}
            </div>
        </section>
    )
}

export default Time