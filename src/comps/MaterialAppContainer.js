//
import React from 'react'
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'


import Typography from '@material-ui/core/Typography'


import AppbarMenu from './AppbarMenu.comp'
import LoginFormComponent from './LoginForm.comp'

import ProfileContainer from './ProfileContainer.comp'
import SchedulesContainer from './SchedulesContainer.comp'



const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },

}));

const MaterialAppContainer = (props)=>{
    const classes = useStyles()

    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )

    const menuData = useSelector( state=> state.menuNavigationData )


    return(
    <div className={classes.root}>
      
      { loginData.isLoggedIn ? <AppbarMenu /> : "Please Login" }
      
      
      
      <main className={classes.content}>
        <div className={classes.toolbar} /> {/* To shift the whole thing a little down, so that the first few lines do not go under the Toolbar */}
        {/* Main Content is below this. */}

        <div> Message : { appMessages.message } </div>
        <div> Is Busy : { '--'+appMessages.isBusy+'--' } </div>

        { JSON.stringify(menuData) }
        
        { loginData.isLoggedIn ? '' : <LoginFormComponent /> }

        { (loginData.isLoggedIn && menuData.active_menu==='PROFILE') ? <ProfileContainer /> : "" }
        { (loginData.isLoggedIn && menuData.active_menu==='SCHEDULE') ? <SchedulesContainer /> : "" }
        { (loginData.isLoggedIn && menuData.active_menu==='LOG_OUT') ? <div> Logout </div> : "" }
        
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>
    </div>
    )
}

export default MaterialAppContainer