//
import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));


const LoginFormComponent = ()=>{
    const classes = useStyles();
    return(
        <React.StrictMode>
        <React.Fragment>
        <Paper elevation={4}>

            
            <form className={classes.margin} noValidate autoComplete="off">
                <Typography variant="h6"> Login </Typography>
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Use Id" variant="outlined" fullWidth />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <Button variant="outlined" color="primary" onClick={() => { alert('clicked') }}> Login </Button>
            </form>
            <span> &nbsp; </span>
        
        </Paper>
        </React.Fragment>
        </React.StrictMode>
    )
}

export default LoginFormComponent