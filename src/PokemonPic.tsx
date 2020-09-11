import React from 'react'

const PokemonPic = ({ src }: { src: string }) => (
    <img
        style={{ height: '300px', width: '300px', objectFit: 'contain' }}
        className="pokemon-pic"
        src={src}
        alt="Selected Pokemon"
    />
)

export default PokemonPic
