// Component
// ListSchedulesRow.comp.js

import React, {useState} from 'react'
import {connect, useDispatch} from 'react-redux'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import UpdateIcon from '@material-ui/icons/Update'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import HighlightOffIcon from '@material-ui/icons/HighlightOff'
//import SaveIcon from '@material-ui/icons/Save'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness2Icon from '@material-ui/icons/Brightness2'

import ListSchedulesRowDetails from './ListSchedulesRowDetails.comp'
import WritePrescriptionComponent from './WritePrescription.comp'


import { deleteScheduleAction } from '../actions'


const ListSchedulesRowComponent = (props)=>{ 

    const dispatch = useDispatch()

    let [shouldShowDetails, setOpenDetails] = useState(false)
    let [shouldShowPrescription, setPrescriptionVisibility] = useState(false)
    let [detailObj, setDetailObj] = useState({})

    const handleClose = ()=>{
        setOpenDetails(false)
    }
    const onDetails = (item)=>{
        //console.log(item)
        setDetailObj(item)
        setOpenDetails( !shouldShowDetails )
        setPrescriptionVisibility(false)
    }
    const onPrescription = (item)=>{
        console.log('onPrescription', item)
        setDetailObj(item)
        setPrescriptionVisibility( !shouldShowPrescription )
        setOpenDetails(false)
    }
    const onDeleteScheduleClick = (item)=>{
        console.log('onDeleteScheduleClick', item)
        dispatch( deleteScheduleAction(item.id) )
    }

    const onJoinWebConference = (url)=>{
        console.log('onJoinWebConference : url', url)
        /*
        const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
        const newWindow = window.open( url, 'FH:WebConferencing', windowFeatures)
        window.console.log('newWindow:', newWindow )
        */
        //const url = detailObj.webURL
        const urlMeeting = 'meeting.html' + '#' + url
        const windowFeatures = "menubar=no,location=no,resizable=yes,scrollbars=no,status=no"
        const newWindow = window.open(urlMeeting, 'FH:WebConferencing', windowFeatures)
        window.console.log('newWindow:', newWindow )
    }
    
    return(
        <React.Fragment> 
            {/* JSON.stringify(props.rowData) */} 
            
            <div style={{ margin:"4px"}}>

                <Typography variant="h6" color="primary">
                    { props.rowData.is_morning ? <span style={{ marginRight:"1em" }}><WbSunnyIcon /></span> : <span style={{ marginRight:"1em" }}><Brightness2Icon /></span> }
                    { new Date(props.rowData.on_date).toDateString() }
                    { props.rowData.isWeb 
                        ? ( <span style={{ marginLeft:"4px" }}> <Button size="small" variant="outlined" color="primary" onClick={ ()=>{ onJoinWebConference(props.rowData.webURL) } }> Join Web at {props.rowData.web_at_time} </Button> </span> )
                        : "" }
                </Typography>

            
                <Button startIcon={<UpdateIcon />} onClick={()=>{ onDetails(props.rowData) }}> Update </Button>
                <Button startIcon={<LocalHospitalIcon />} onClick={()=>{ onPrescription(props.rowData) }}> Prescribe </Button>
                <Button startIcon={<HighlightOffIcon />} onClick={()=>{ onDeleteScheduleClick(props.rowData) }} color="secondary"> Delete </Button>

            </div>
            { shouldShowDetails ? <ListSchedulesRowDetails data={detailObj} /> : ""}
            { shouldShowPrescription ? <WritePrescriptionComponent data={detailObj} /> : ""}
            
        </React.Fragment>
    )
}
export default connect()(ListSchedulesRowComponent)