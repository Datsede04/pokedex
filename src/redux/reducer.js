import { TOGGLE_FAVOURITE } from "./actions"

const initialDate ={
    favourites:[]
}

const pokemonReducer = (state = initialDate,action)=>{
    switch(action.type){
        case TOGGLE_FAVOURITE:
            let pokemon =action.payload
            let pokemonFromFavorite = state.favourites.find((favPokemon)=> pokemon.id === favPokemon.id)
            return {
                ...state,
                favourites:pokemonFromFavorite?[
                    ...state.favourites.filter(
                        (pokemon) => pokemon.id !==  pokemonFromFavorite.id
                    ),
                ]:[...state.favourites, action.payload]
            };
            default:
                return state;
        }
}

export default pokemonReducer