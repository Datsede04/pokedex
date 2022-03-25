import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {Link }from 'react-router-dom'
const useStyle = makeStyles((theme)=>({
    AppBar:{
        backgroundColor:"black",
    },
    link:{
        textDecoration:"none",
        
    },
    title:{
        cursor: "pointer",
        color:'white'
    }
}))

function AppNavigator() {
  const classes = useStyle();
  return (
    <>
      <AppBar className={classes.AppBar} position='fixed'  elevation={2}>
         <Toolbar>
             <Link to="/" className={classes.Link}>
                 <Typography className={classes.title} variant='h6'>Pokedex</Typography>
             </Link>

             <Link to="/favorites" className={classes.Link}>
                 <Typography className={classes.title} style={{marginLeft:15}} variant='h6'>Favorites</Typography>
             </Link>
         </Toolbar>
      </AppBar>
    </>
  )
}

export default AppNavigator