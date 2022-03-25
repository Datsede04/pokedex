import React, { Component } from 'react'
import axios from 'axios'
import  POKEMON_API_URL from '../config/config'
import {Box, CircularProgress,withStyles,Typograph} from '@material-ui/core '


const styles = (theme) =>({
    pokedexContainer :{
        height:'80vh',
        backgroundColor:'black',
        color:'white'
    },
    textTitle:{
        textTransform: "uppercase",
        fontFamily:"Fantasy",
    },
    pokemonImage:{
        width:"170px",
        height:"170px"
    }
})

class PokemonDetail extends Component {
  constructor(props){
      super(props)
      this.state = {
            pokemon:null
      }
  }
  componentDidMount(){
      const  { match}=this.props
      const {id} = match?.params
      axios.get( POKEMON_API_URL + "/"+ id).then((response)=> {
        if(response.status>=200 && response.status<200){
            this.setState({pokemon:response.data})
        }  
     })
  }
    
 render() {
        const {classes} = this.props
        const {pokemon} = this.props
        if(pokemon){
            const {name, sprites} = pokemon
            return (
            <>
                <Box>
                    <Box className={classes.pokedexContainer}>
                        <Typograph className={classes.pokedexContainer} variant="h1">
                            {name}
                        </Typograph>
                        <img className={classes.pokemonImage} src={sprites.front_default}/>
                    </Box>
                </Box>
            </>
            );
        }else {
          return <CircularProgress/>
        }
  }
}

export default  withStyles(styles)(PokemonDetail)