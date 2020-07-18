//
import React, {useState} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { loginActionCreator, changeMessage, changeStatusAsBusy } from '../actions'

import { makeStyles } from '@material-ui/core/styles'

import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
    let [isFirstTime, setIsfirstTime] = useState(true)

    const onLoginButtonClick = ()=>{
        setIsfirstTime(false)

        dispatch( changeStatusAsBusy(true) )
        dispatch( loginActionCreator( {
            pUserId : username,
            pUserPw : password
        } ) )
    }

    // Redux Store
    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )
    

    return(
        <React.StrictMode>
        <React.Fragment>
        <Container fixed maxWidth="sm">
        <Paper elevation={4}>

            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />

            <div style={{margin:"2em"}}>
                <form className={classes.margin} noValidate autoComplete="off">
                    <Typography variant="h6"> Login | Doctor </Typography>
                </form>
                <form className={classes.margin} noValidate autoComplete="off">
                    <TextField label="Use Id" variant="outlined" fullWidth onChange={ event => setUsername(event.target.value)  } />
                </form>
                <form className={classes.margin} noValidate autoComplete="off">
                    <TextField label="Password" variant="outlined" type="password" fullWidth onChange={ event => setPassword(event.target.value)  }/>
                </form>
                <form className={classes.margin} noValidate autoComplete="off">
                    <Button variant="outlined" color="primary" onClick={onLoginButtonClick}> Login </Button>
                </form>
                <div>
                    <Typography variant="h6" color="secondary"> 
                        { 
                            appMessages.isBusy ? "Validating Login ..." 
                            : (loginData.isLoggedIn ? "YES" : (isFirstTime ? "" : "Login Fail. Try again with valid UserId and Password.") )
                        }
                    </Typography>
                </div>
            </div>
            
            <span> &nbsp; </span>
        
        </Paper>
        </Container>
        </React.Fragment>
        </React.StrictMode>
    )
}

export default connect()(LoginFormComponent)