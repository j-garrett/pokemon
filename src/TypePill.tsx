import React from 'react'

import { PokemonTypes, typeColors } from './types/types'
import './css/TypePill.css'

const TypePill = ({
    children,
    type,
    onClick,
}: {
    children?: React.ReactElement
    onClick?: (arg: any) => void
    type: PokemonTypes
}) => (
    <div
        className="pill-container"
        key={type}
        onClick={onClick}
        style={{
            backgroundColor: typeColors[type],
        }}
    >
        <span className="pill-text">{type}</span>
        {children}
    </div>
)

export default TypePill
