//
import React, {useState} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loginActionCreator, changeMessage, changeStatusAsBusy } from '../actions'

import { makeStyles } from '@material-ui/core/styles';

import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));


let LoginFormComponent = ()=>{
    const classes = useStyles();

    const dispatch = useDispatch()

    let [username, setUsername] = useState('Rama')
    let [password, setPassword] = useState('Pass')

    const onLoginButtonClick = ()=>{
        dispatch( changeStatusAsBusy(true) )
        dispatch( loginActionCreator( {
            pUserId : username,
            pUserPw : password
        } ) )
        //dispatch( changeMessage('Hello Sunlight') )
    }

    // Redux Store
    const appMessages = useSelector( state=> state.messages )
    

    return(
        <React.StrictMode>
        <React.Fragment>
        <Paper elevation={4}>

            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            

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
                <Button variant="outlined" color="primary" onClick={onLoginButtonClick}> Login </Button>
            </form>
            <span> &nbsp; </span>
        
        </Paper>
        </React.Fragment>
        </React.StrictMode>
    )
}

export default connect()(LoginFormComponent)