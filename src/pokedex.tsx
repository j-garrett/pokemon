import React, { useState, useEffect } from 'react'
import axios from 'axios'

import PokeList from './PokeList'

function Pokedex() {
    const [pokemon, setPokemon] = useState([])
    useEffect(() => {
        let cancel: any
        axios
            .get(
                'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json',
                {
                    cancelToken: new axios.CancelToken(c => (cancel = c)),
                }
            )
            .then(res => {
                setPokemon(res.data.pokemon)
            })
            .catch(err => {
                console.log('error: ', err)
                cancel()
            })

        return function clean() {
            cancel()
        }
    }, [])

    return (
        <div>
            <h1>POKEMONNNNN</h1>
            <PokeList pokemonList={pokemon} />
        </div>
    )
}

export default Pokedex
