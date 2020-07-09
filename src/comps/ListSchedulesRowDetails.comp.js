// Component
// ListSchedulesRowDetails.comp.js
//

import React, {useState} from 'react'
import { connect, useDispatch } from 'react-redux'
import { updateSinlgeScheduleForDoctorAction } from '../actions'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

// Component
const ListSchedulesRowDetailsComponent = (props)=>{
    const classes = useStyles(); // MaterialUI

    const dispatch = useDispatch() // React-Redux

    const detailObj = props.data
    const [isWeb, setIsWeb]= useState(detailObj.isWeb)
    const [webTime, setWebTime]= useState(detailObj.web_at_time)
    //const [webURL, setWebURL]= useState(detailObj.webURL)

    const toggleWebChecked = ()=>{
        setIsWeb( !isWeb )
    }
    
    const onUpdateSchedule = ()=>{
        //console.log('onUpdateSchedule')
        //console.log( 'old=',detailObj )

        //console.log('isWeb', isWeb)
        //console.log('webTime',webTime)
        //let webURL = '';
        const webURL = 'https://meet.jit.si/' + 'FindHealthToday_'
                                                + detailObj.groupId + '_'
                                                + detailObj.doctorId + '_'
                                                + detailObj.personId + '_'
                                                + webTime
        const newSchedule = {...detailObj, isWeb:isWeb, web_at_time:webTime, webURL}
        console.log('onUpdateSchedule : schedule =', newSchedule)
        dispatch( updateSinlgeScheduleForDoctorAction(newSchedule) )
    }
    const onJoinWebConference = ()=>{
      window.console.log('onJoinWebConference', detailObj.webURL)
      const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
      const newWindow = window.open(detailObj.webURL, 'FH:WebConferencing', windowFeatures)
      window.console.log('newWindow:', newWindow )
    }

    return(
        <React.Fragment>
        
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom> Schedule Details </Typography>
            
            <Typography color="textSecondary">
                <span> Id : {detailObj.id} | {detailObj.on_date} | {(detailObj.is_morning) ? "Morning" : "Evening"} </span>
                { 
                  detailObj.isWeb ? 
                  <Button size="small" variant="outlined" color="primary" onClick={onJoinWebConference}> Join Web </Button> : ""
                }
            </Typography>
            <FormGroup>
                {/* ref: https://stackoverflow.com/questions/47012169/a-component-is-changing-an-uncontrolled-input-of-type-text-to-be-controlled-erro */}
                <FormControlLabel control={<Switch onChange={toggleWebChecked} checked={isWeb || false} />} label="Is Web Meeting?" />
            </FormGroup>
            
            <div>
                { isWeb ?
                    <React.Fragment>
                    <form className={classes.margin} noValidate autoComplete="off">
                        <TextField id="outlined-basic" 
                            label="Web Meeting At Time" variant="outlined" fullWidth 
                            onChange={ event=>setWebTime(event.target.value) }
                            value={webTime || ''} />
                    </form>
                    </React.Fragment>
                : ""}
            </div>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" color="primary" onClick={onUpdateSchedule}> Update </Button>
                {/* <Button size="small" variant="outlined" color="primary" onClick={onPrescription}> Prescription </Button> */}
          </CardActions>
      </Card>

      </React.Fragment>
    )
}

export default connect()(ListSchedulesRowDetailsComponent)