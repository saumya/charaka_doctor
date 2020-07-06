//
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//const drawerWidth = 240;

const useStyles = makeStyles( (theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    list: {
        width: 250,
      },
    fullList: {
        width: 'auto',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}) );

const AppbarMenu = ()=>{
    
    const classes = useStyles();
    const [shouldShowSidebar, setShouldShowSidebar] = useState(false)
    const showSideBar = ()=> setShouldShowSidebar(true)
    const hideSideBar = ()=> setShouldShowSidebar(false)

    return(
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={showSideBar}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}> Doctor </Typography>
                {/* <Button color="inherit">Logout</Button> */}
                <Typography variant="h6"> Sun Moon Clinic </Typography>
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" anchor="left" open={ shouldShowSidebar } onClose={ hideSideBar }>
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <ListItem button key='profile'>
                    <ListItemIcon><InboxIcon /></ListItemIcon>
                    <ListItemText primary='Profile' />
                    </ListItem>
                    <ListItem button key='schedules'>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='Schedules' />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key='logout'>
                    <ListItemIcon><MailIcon /></ListItemIcon>
                    <ListItemText primary='Logout' />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    )

}

export default AppbarMenu