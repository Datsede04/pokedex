import { Box } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect } from 'react'
import { POKEMON_API_URL } from '../config/config'

function Pokedex() {
  
useEffect(()=>{
    axios.get(POKEMON_API_URL).then((respones)=> {
        console.log(respones)
    })
},[])
return (
   <Box>Pokedex</Box>
  
  )
}

export default Pokedex