import React, { Component } from 'react'
import axios from 'axios'
import  {POKEMON_API_URL} from '../config/config.js'
import {Box, Button,Grid,CircularProgress,withStyles,Typography} from '@material-ui/core'
import FavoriteIcon from "@material-ui/icons/Favorite"
import { connect } from 'react-redux'
import { toggleFavorite } from '../redux/actions.js'


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
    },
    pokemomInfoContainer:{
          bottom:60,
          position:"absolute",
          backgroundColor:'blue',
          width:1000,
          height:200
    },
    favorite:{
        height:50,
        width:50,
        marginTop:15
    },
    text:{
        fontSize:30
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
 
  favoriteChecker(pokemon){
      let found = false
      this.props.favourites?.map((p)=>{
        if(p.id === pokemon.id){
            found=true;
        }
      })
  }

 render() {
        const {classes} = this.props
        const {pokemon} = this.props
        if(pokemon){
            const {name, sprites, height,width,weight,types} = pokemon
            return (
            <>
                <Box>
                    <Box className={classes.pokedexContainer}>
                        <Typography className={classes.pokedexContainer} variant="h1">
                            {name}
                        </Typography>
                        <img className={classes.pokemonImage} src={sprites.front_default}/>
                        <Box className={classes.pokemomInfoContainer}>
                          <hr className={classes.seperator}/>
                          <Grid container>
                            <Grid item md={1}>
                              <Button className={classes.favorite} onClick={()=>this.props.toggleFavorite(pokemon)}>
                                <FavoriteIcon src={{color:this.favoriteChecker(pokemon)?"red":"white", fontSize:50}}/>
                              </Button>
                            </Grid>
                            <Grid item md={2}>
                              <Typography className={classes.text}>
                                Name
                                <br/>
                                {name}
                              </Typography>
                            </Grid>
                            <Grid item md={2}>
                              <Typography className={classes.text}>
                                Height
                                <br/>
                                {height}m
                              </Typography>
                            </Grid>
                            <Grid item md={2}>
                              <Typography className={classes.text}>
                                Width
                                <br/>
                                {width}m
                              </Typography>
                            </Grid>
                            <Grid item md={2}>
                              <Typography className={classes.text}>
                               Weight
                                <br/>
                                {weight}Kg
                              </Typography>
                            </Grid>
                                {types.map((pokemonType)=>{
                                    console.log(pokemon) 
                                    const {name} = pokemonType.types
                                    return (
                                        <Grid item md={2}>
                                         <Typography className={classes.text}>
                                            Type
                                            <br/>
                                            {name}  
                                         </Typography>
                                        </Grid>
                                    );
                                })}
                          </Grid>
                        </Box>
                    </Box>
                </Box>
            </>
            );
        }else {
          return <CircularProgress/>
        }
  }
  
}
const mapStateToProps = (state) => ({
  favourites: state.favourites
})

const mapDispatchToProps =(dispatch)=> ({
  toggleFavorite:(pokemon) => dispatch(toggleFavorite(pokemon))
})

export default  withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PokemonDetail))
 