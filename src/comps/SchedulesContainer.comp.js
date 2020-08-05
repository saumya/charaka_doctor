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
import CachedIcon from '@material-ui/icons/Cached';

//import TableSchedules from './TableSchedules.comp'
import ListSchedulesComponent from './ListSchedules.comp'

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
    const all_schedules_for_doctor = JSON.stringify(schedules.all_schedules_for_doctor)

    const onGetDataFromServer = ()=>{
        console.log( new Date()+' : Get Data from Server')
        dispatch( changeMessage('Hello Sunlight') )
        dispatch( getSchedulesForDoctorAction(loginUserObj.id) )
    }
    /*
    let listOfSchedules = all_schedules_for_doctor.map( oneSchedule =>
        <li>{ JSON.stringify(oneSchedule) }</li>
    )
    */
    const SchedulesList = function(props){
        //let listOfSchedules = schedules.all_schedules_for_doctor.map(function(item){
        let listOfSchedules = props.list_data.map(function(item){
            let oneRow = <li key={item.id}>
                            <span>Id : {item.id} - </span>
                            <span>On : {item.on_date} - </span>
                            <span>{item.is_morning? "Morning" : "Evening"}</span>
                        </li>
            return oneRow
        })
        return (<ul>{listOfSchedules}</ul>)
    }

   //
    return(
        <React.Fragment>
            <Typography variant="h2" gutterBottom> Schedules </Typography>
            <form className={classes.margin} noValidate autoComplete="off">
                <Button variant="contained" endIcon={<CachedIcon />} onClick={onGetDataFromServer}> Get All </Button>
            </form>

            <Paper elevation={4}>
            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            
            {/* Render as per Screen Width */}
            { /*
                (document.body.clientWidth>800) 
                ? <TableSchedules table_data={schedules.all_schedules_for_doctor} /> 
                : <SchedulesList list_data={schedules.all_schedules_for_doctor} /> 
                */
            }

            { <ListSchedulesComponent list_data={schedules.all_schedules_for_doctor} /> }
            
            <div> &nbsp; </div>
            <LinearProgress color="secondary" variant={appMessages.isBusy ? "indeterminate" : "determinate" } value={0} />
            </Paper>
        </React.Fragment>
    )
}

export default connect()(SchedulesContainer)
