import React from 'react'
import './PokeList.css'

enum PokemonTypes {
    Normal = 'Normal',
    Fire = 'Fire',
    Fighting = 'Fighting',
    Water = 'Water',
    Flying = 'Flying',
    Grass = 'Grass',
    Poison = 'Poison',
    Electric = 'Electric',
    Ground = 'Ground',
    Psychic = 'Psychic',
    Rock = 'Rock',
    Ice = 'Ice',
    Bug = 'Bug',
    Dragon = 'Dragon',
    Ghost = 'Ghost',
    Dark = 'Dark',
    Steel = 'Steel',
    Fairy = 'Fairy',
    '???' = '???',
}

const typeColors = {
    Normal: '#A8A878',
    Fire: '#F08030',
    Fighting: '#C03028',
    Water: '#6890F0',
    Flying: '#A890F0',
    Grass: '#78C850',
    Poison: '#A040A0',
    Electric: '#F8D030',
    Ground: '#E0C068',
    Psychic: '#F85888',
    Rock: '#B8A038',
    Ice: '#98D8D8',
    Bug: '#A8B820',
    Dragon: '#7038F8',
    Ghost: '#705898',
    Dark: '#705848',
    Steel: '#B8B8D0',
    Fairy: '#EE99AC',
    '???': '#68A090',
}

const TypePill = (type: PokemonTypes) => (
    <div
        key={type}
        className="pill-container"
        style={{
            backgroundColor: typeColors[type],
        }}
    >
        <span className="pill-text">{type}</span>
    </div>
)

const PokeList = ({ pokemonList }: { pokemonList: any[] }) => (
    <>
        {pokemonList.map(({ name, id, type, weaknesses }) => (
            <div key={id}>
                <h2>{`${id}: ${name}`}</h2>
                <h3>Type</h3>
                {type.map(TypePill)}
                <h3>Weakeness</h3>
                {weaknesses.map(TypePill)}
                <hr></hr>
            </div>
        ))}
    </>
)

export default PokeList
