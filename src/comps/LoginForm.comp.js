//
import React, {useState} from 'react'

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


const LoginFormComponent = (props)=>{
    const classes = useStyles();
    
    let [username, setUsername] = useState('Rama')
    let [password, setPassword] = useState('Pass')

    return(
        <React.StrictMode>
        <React.Fragment>
        <Paper elevation={4}>

            { username } | { password }

            <form className={classes.margin} noValidate autoComplete="off">
                <Typography variant="h6"> Login </Typography>
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Use Id" variant="outlined" fullWidth onChange={ event => setUsername(event.target.value)  } />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Password" variant="outlined" type="password" fullWidth onChange={ event => setPassword(event.target.value)  }/>
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <Button variant="outlined" color="primary" onClick={() => { props.onLogin({uname:username,upass:password}) }}> Login </Button>
            </form>
            <span> &nbsp; </span>
        
        </Paper>
        </React.Fragment>
        </React.StrictMode>
    )
}

export default LoginFormComponent