import "./Card.css"

const Card = ({nome, imagem, cargo, corDeFundo}) => {

    const backgroundColor = {backgroundColor: corDeFundo}

    return(
        <article className="colaborador">
            <div className="cabecalho" style={backgroundColor}>
                <img src={imagem} alt={`Membro da equipe: ${nome}`}/>
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </article>
    )
}

export default Card