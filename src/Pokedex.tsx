import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Fuse from 'fuse.js'

import PokeList from './PokeList'
import PokemonDetails from './PokemonDetails'

import { IPokemon, PokemonTypes, pokemonTypeArray } from './types/types'
import TypeFilters from './TypeFilters'
import './css/Pokedex.css'
import './css/App.css'

const updateFilter = (
    type: PokemonTypes,
    array: PokemonTypes[],
    callback: (arr: PokemonTypes[]) => void
): PokemonTypes[] => {
    const typeIdx = array.findIndex(val => val === type)
    let updated = []
    if (typeIdx >= 0) {
        updated = array.filter((_, idx) => idx !== typeIdx)
        callback(updated)
    } else {
        updated = [...array, type]
        callback(updated)
    }
    return updated
}

function Pokedex() {
    const [pokemon, setPokemon] = useState<IPokemon[]>([])
    const [pokemonList, setPokemonList] = useState<IPokemon[]>([])
    const [selected, setSelected] = useState(0)
    const [nameFilter, setNameFilter] = useState('')
    const [checkedTypes, setCheckedTypes] = useState<PokemonTypes[]>([])
    const [checkedWeaknesses, setCheckedWeaknesses] = useState<PokemonTypes[]>(
        []
    )
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
                const pokemon: IPokemon[] = res.data?.pokemon
                setPokemon(pokemon)
                setPokemonList(pokemon)
                setSelected(pokemon[0].id)
            })
            .catch(err => {
                console.log('error: ', err)
            })

        return function clean() {
            cancel()
        }
    }, [])

    useEffect(() => {
        let filteredPokemonList = pokemon.filter(pokemon =>
            checkedTypes.reduce<boolean>(
                (acc, val) => acc && pokemon.type.indexOf(val) >= 0,
                true
            )
        )
        filteredPokemonList = filteredPokemonList.filter(pokemon =>
            checkedWeaknesses.reduce<boolean>(
                (acc, val) => acc && pokemon.weaknesses.indexOf(val) >= 0,
                true
            )
        )
        if (nameFilter) {
            const options: Fuse.IFuseOptions<IPokemon> = {
                keys: ['name'],
            }
            const fuse = new Fuse(filteredPokemonList, options)
            filteredPokemonList = fuse
                .search(nameFilter)
                .map(({ item }) => item)
        }
        if (filteredPokemonList.length) {
            setPokemonList(filteredPokemonList)
            setSelected(filteredPokemonList[0].id)
        } else {
            setPokemonList([])
        }
    }, [checkedTypes, checkedWeaknesses, nameFilter, pokemon])

    const updateNameFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameFilter(e.target.value)
    }

    const updateTypeFilter = (type: PokemonTypes) => {
        updateFilter(type, checkedTypes, setCheckedTypes)
    }

    const updateWeaknessFilter = (type: PokemonTypes) => {
        updateFilter(type, checkedWeaknesses, setCheckedWeaknesses)
    }

    const selectedPokemon = pokemonList.find(p => p.id === selected)
    return (
        <div
            style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
            {!pokemon.length ? (
                <h1>...loading</h1>
            ) : (
                <>
                    <div id="search-container">
                        <label>
                            <h3>Search</h3>
                            <input
                                placeholder="name"
                                type="text"
                                value={nameFilter}
                                onChange={updateNameFilter}
                            ></input>
                        </label>
                        <div className="type-filter">
                            <h3>Filter by Type</h3>
                            <div>
                                {pokemonTypeArray.map(type => (
                                    <TypeFilters
                                        key={type}
                                        checked={
                                            !!checkedTypes.find(
                                                val => val === type
                                            )
                                        }
                                        type={type}
                                        onChange={updateTypeFilter}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="type-filter">
                            <h3>Filter by Weakness</h3>
                            <div>
                                {pokemonTypeArray.map(type => (
                                    <TypeFilters
                                        key={type}
                                        checked={
                                            !!checkedWeaknesses.find(
                                                val => val === type
                                            )
                                        }
                                        type={type}
                                        onChange={updateWeaknessFilter}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                    {!pokemonList.length && (
                        <h2>There are no pokemon matching these filters</h2>
                    )}
                    <div id="pokedex-container" className="flex-two-column">
                        <div id="pokedex-list-container">
                            <PokeList
                                pokemonList={pokemonList}
                                onClick={setSelected}
                                selected={selected}
                            />
                        </div>
                        <div id="pokedex-details-container">
                            {selected && selectedPokemon && (
                                <PokemonDetails pokemon={selectedPokemon} />
                            )}
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default Pokedex
