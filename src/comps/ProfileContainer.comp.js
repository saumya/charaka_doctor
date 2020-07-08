// Component
// ProfileContainer.comp.js
//

import React, {useState} from 'react'
import {connect, useDispatch,useSelector} from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


import {updateUserProfileAction} from '../actions'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    title: {
        color: "#000000",
        fontSize: "3em"
    },
}));

const ProfileContainer = ()=> {
    const classes = useStyles()

    // React-Redux
    const dispatch = useDispatch();
    // Redux Store
    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )
    // Copying the Global State object to Local Object to EDIT here
    // Directly not changing the Global State
    let [localUserObj, setLocalUSerObj] = useState({...loginData.loginUserObject})
    // 
    const onUpdateProfile = ()=> dispatch(updateUserProfileAction(localUserObj))
    

    return(
        <React.Fragment>
            {/* JSON.stringify(localUserObj) */}
            <h1 className={classes.title}>Profile</h1>

            <Paper elevation={4}>
            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Use Id" variant="outlined" fullWidth disabled value={localUserObj.id}   />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="password" variant="outlined" fullWidth value={localUserObj.password}  />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Name" variant="outlined" fullWidth value={localUserObj.name} onChange={ event => setLocalUSerObj({ ...localUserObj, name:event.target.value}) } />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Phone" variant="outlined" fullWidth value={localUserObj.phone} onChange={ event => setLocalUSerObj({ ...localUserObj, phone:event.target.value}) } />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="address" variant="outlined" fullWidth value={localUserObj.address} onChange={ event => setLocalUSerObj({ ...localUserObj, address:event.target.value}) } />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="email" variant="outlined" fullWidth value={localUserObj.email} onChange={ event => setLocalUSerObj({ ...localUserObj, email:event.target.value}) } />
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Specialization" variant="outlined" fullWidth value={localUserObj.specialization} onChange={ event => setLocalUSerObj({ ...localUserObj, specialization:event.target.value}) }  />
            </form>

            <form className={classes.margin} noValidate autoComplete="off">
                <Button variant="contained" color="primary" onClick={onUpdateProfile}> Update </Button>
            </form>
            <span> &nbsp; </span>
            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            </Paper>
        </React.Fragment>
    )
}

export default connect()(ProfileContainer)
