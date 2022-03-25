import { Box, CircularProgress,Grid, makeStyles } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PokemonCard from '../components/PokemonCard'
import { IMAGE_API_URL, POKEMON_API_URL } from '../config/config'

const useStyle = makeStyles((theme)=>({
   pokemonContainer:{
       textAlign:"center",
       padding:"75px 10px 0px 10px",
       backgroundColor:"rgb(68,68,68)"
   }
}))

function Pokedex() {

const classes = useStyle();
const [pokemonData,setPokemonData]= useState(null)  
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
                });
                setPokemonData(newPokemonData)
        }
    })
},[])
return (
   <Box>{pokemonData ?(
    <Grid className={classes.pokemonContainer} container spacing={2}>  
        {pokemonData.map((pokemon)=>{
            console.log("tester")
            return (
                <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
            )
        })}
    </Grid>)
   :<CircularProgress style={{marginTop:100}}/> }</Box>
  )
}

export default Pokedex