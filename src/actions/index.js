// // en los actions creators es una función que retorna un action, un objeto que describe lo que va a pasar
import { getPokemonDetails } from "../api";
import { SET_POKEMONS , SET_LOADING} from "./types";


export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});

export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload,
})

//el payload son los nuevos pokemones

export const getPokemonsWithDetails = //esto no se puede hacer sin redux thunk, por el asincronismo
(pokemons = []) =>
async(dispatch) => {
  //devuelve una función que recibe un dispatch, es la foma de que funcionan thunk
  const pokemonDetailed = await Promise.all(
    pokemons.map((pokemon) => getPokemonDetails(pokemon))
  );
  dispatch(setPokemons(pokemonDetailed));
};
