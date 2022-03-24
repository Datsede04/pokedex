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
      <AppBar className={classes.AppBar} position='fixed' variant='h6'>
         <Toolbar>
             <Link to="/" className={classes.Link}>
                 <Typography className={classes.title}>Pokedex</Typography>
             </Link>
         </Toolbar>
      </AppBar>
    </>
  )
}

export default AppNavigator