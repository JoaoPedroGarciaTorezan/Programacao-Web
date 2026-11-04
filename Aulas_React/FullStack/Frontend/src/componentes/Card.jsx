export default function Card({nome, imagem}) {

    return (
        <div>
            <h2>{nome}</h2>
            <img src={imagem} alt={`Imagem do pokémon ${nome}`} />
        </div>
    )
}