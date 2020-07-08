// Component
// ListSchedulesRowDetails.comp.js
//

import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
}));

const ListSchedulesRowDetailsComponent = (props)=>{
    const classes = useStyles(); // MaterialUI

    const detailObj = props.data

    return(
        <React.Fragment>
        <Paper variant="outlined" >
        <div style={{ background: "#CCC", margin: "1em", padding: "1em" }}>
            { JSON.stringify(detailObj) }
        </div>
            <form className={classes.margin} noValidate autoComplete="off">
                <Typography variant="h6"> Appointment Id : {detailObj.id} </Typography>
                <Typography variant="h6"> Date : {detailObj.on_date} </Typography>
                <Typography variant="h6"> Morning : {(detailObj.is_morning) ? "YES" : "NO"} </Typography>
                <Typography variant="h6"> Attended : {(detailObj.isAttended) ? "YES" : "NO"} </Typography>
                <Typography variant="h6"> Web : {(detailObj.isWeb) ? "YES" : "NO"} </Typography>
                <Typography variant="h6"> webURL : {detailObj.webURL} </Typography>
            </form>
            <form className={classes.margin} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Web Meeting At Time" variant="outlined" fullWidth> {detailObj.web_at_time} </TextField>
            </form>
        </Paper>
        </React.Fragment>
    )
}

export default ListSchedulesRowDetailsComponent