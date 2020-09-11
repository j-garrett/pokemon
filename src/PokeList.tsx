import React from 'react'

import { IPokemon } from './types/types'
import './css/PokeList.css'
import Pokeball from './img/pokeball.png'

const PokeList = ({
    pokemonList,
    onClick,
    selected,
}: {
    pokemonList: IPokemon[]
    onClick: (id: number) => void
    selected: number
}) => (
    <>
        {pokemonList.map(({ id, name, num }) => (
            <div
                key={id}
                onClick={() => onClick(id)}
                id={selected === id ? 'selected' : ''}
                className="poke-list-item"
            >
                <img src={Pokeball} alt="pokeball" />
                <h2>
                    - {num} - {name}
                </h2>
            </div>
        ))}
    </>
)

export default PokeList
