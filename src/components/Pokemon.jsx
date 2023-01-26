import React from "react";

const Pokemon = ({pokemon}) =>{

    // console.log(pokemon);

    return(
        <div className="pokeCard">
            <article>
                <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                <h2 className="pokeCard__Name">{pokemon?.name}</h2>
                <ul className="pokeCard__Data">
                    <li ><b> Height.: </b>{pokemon?.height}</li>
                    <li><b>Weight.: </b>{pokemon?.weight}</li>
                    <li><b>Type.: </b>{pokemon?.types[0].type.name}</li>
                </ul>
            </article>
        </div>
    )
}

export default Pokemon