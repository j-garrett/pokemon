import React from 'react'

import PokemonPic from './PokemonPic'
import TypePill from './TypePill'

import { IPokemon } from './types/types'
import './css/PokemonDetails.css'

const PokemonDetails = ({ pokemon }: { pokemon: IPokemon }) => (
    <div key={pokemon.id} id="pokemon-details">
        <PokemonPic src={pokemon.img} />
        <div className="pokemon-details-body">
            <h2>
                {pokemon.num}. {pokemon.name}
            </h2>
            <h3>Type</h3>
            <div className="type-list">
                {pokemon.type.map(t => (
                    <TypePill key={t} type={t} />
                ))}
            </div>
            <h3>Weakeness</h3>
            <div className="type-list">
                {pokemon.weaknesses.map(t => (
                    <TypePill key={t} type={t} />
                ))}
            </div>
        </div>
    </div>
)

export default PokemonDetails
