import React from 'react'

import { PokemonTypes } from './types/types'
import TypePill from './TypePill'
import './css/Pokedex.css'
import './css/App.css'

interface ITypeFilters {
    checked: boolean
    type: PokemonTypes
    onChange: (type: PokemonTypes) => void
}

const TypeFilters = ({ type, checked, onChange }: ITypeFilters) => (
    <TypePill
        type={type}
        onClick={() => {
            onChange(type)
        }}
    >
        <input
            checked={checked}
            type="checkbox"
            onChange={() => onChange(type)}
        />
    </TypePill>
)

export default TypeFilters
