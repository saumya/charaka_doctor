// Component
// SchedulesContainer.comp.js
//

import React from 'react'
import {connect, useDispatch, useSelector} from 'react-redux'

import { changeMessage, getSchedulesForDoctorAction } from '../actions'

import { makeStyles } from '@material-ui/core/styles'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'

import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const SchedulesContainer = ()=>{
    const classes = useStyles()
    const dispatch = useDispatch()

    const appMessages = useSelector( state=> state.messages )
    const loginData = useSelector( state=> state.loginData )
    const loginUserObj = loginData.loginUserObject

    const schedules = useSelector( state=> state.schedulesData )

    const onGetDataFromServer = ()=>{
        console.log( new Date()+' : Get Data from Server')
        dispatch( changeMessage('Hello Sunlight') )
        dispatch( getSchedulesForDoctorAction(loginUserObj.id) )
    }
    return(
        <React.Fragment>
            { JSON.stringify(schedules.all_schedules_for_doctor) }
            <Typography variant="h2" gutterBottom> Schedules </Typography>
            <form className={classes.margin} noValidate autoComplete="off">
                <Button variant="contained" onClick={onGetDataFromServer}> Get </Button>
            </form>

            <Paper elevation={4}>
            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            
            </Paper>
        </React.Fragment>
    )
}

export default connect()(SchedulesContainer)
