import { Box, CircularProgress } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config/config'

function Pokedex() {
const [pokemonData,setPokemonData]= useState([])  
useEffect(()=>{
    axios.get(POKEMON_API_URL).then((respones)=> {
        console.log(respones)    
        if(respones.status >= 200 && respones.status <=300){
                const { results } =  respones.data;
                let newPokemonData=[];
                
                results.forEach((pokemon, index) => {
                    index++;
                    let pokemonObject ={
                        id: index,
                        url: IMAGE_API_URL + index+".png",
                        name: pokemon.name
                    }
                    newPokemonData.push(pokemonObject)

                    console.log("PokemonObject", pokemonObject)
                    console.log("pokemon", pokemon)
                });
                setPokemonData(newPokemonData)
        }
    })
},[])
return (
   <Box>{pokemonData ? pokemonData.map((pokemon)=>{
       return <h1>{pokemon.name}</h1>
   }):<CircularProgress style={{marginTop:100}}/> }</Box>
  )
}

export default Pokedex