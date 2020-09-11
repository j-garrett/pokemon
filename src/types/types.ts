export const typeColors = {
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
}

export enum PokemonTypes {
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
}

export const pokemonTypeArray: PokemonTypes[] = [
    PokemonTypes.Normal,
    PokemonTypes.Fire,
    PokemonTypes.Fighting,
    PokemonTypes.Water,
    PokemonTypes.Flying,
    PokemonTypes.Grass,
    PokemonTypes.Poison,
    PokemonTypes.Electric,
    PokemonTypes.Ground,
    PokemonTypes.Psychic,
    PokemonTypes.Rock,
    PokemonTypes.Ice,
    PokemonTypes.Bug,
    PokemonTypes.Dragon,
    PokemonTypes.Ghost,
    PokemonTypes.Dark,
    PokemonTypes.Steel,
    PokemonTypes.Fairy,
]

export interface IPokemon {
    id: number
    name: string
    type: PokemonTypes[]
    img: string
    num: string
    weaknesses: PokemonTypes[]
}
