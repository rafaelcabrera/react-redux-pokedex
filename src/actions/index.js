// // en los actions creators es una función que retorna un action, un objeto que describe lo que va a pasar
import {SET_POKEMONS} from './types'

export const setPokemons = (payload)=> ({
    type: SET_POKEMONS,
    payload,

});

//el payload son los nuevos pokemones