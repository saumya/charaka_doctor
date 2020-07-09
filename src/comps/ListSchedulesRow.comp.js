// Component
// ListSchedulesRow.comp.js

import React, {useState} from 'react'

import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'

import UpdateIcon from '@material-ui/icons/Update'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
//import SaveIcon from '@material-ui/icons/Save'

import ListSchedulesRowDetails from './ListSchedulesRowDetails.comp'
import WritePrescriptionComponent from './WritePrescription.comp'


const ListSchedulesRowComponent = (props)=>{ 

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
    
    return(
        <React.Fragment> 
            {/* JSON.stringify(props.rowData) */} 
            
            <div style={{height: "44px", margin:"4px"}}>
                    <span style={{width: "300px", marginRight:"1em"}}>
                        Id-{props.rowData.id} | {props.rowData.on_date} | 
                        { props.rowData.is_morning ? " Morning" : " Evening" }
                    </span> 
                
                <ButtonGroup variant="outlined" color="primary">
                    <Button startIcon={<UpdateIcon />}onClick={()=>{ onDetails(props.rowData) }}> Update </Button>
                    <Button startIcon={<LocalHospitalIcon />} onClick={()=>{ onPrescription(props.rowData) }}> Write </Button>
                </ButtonGroup>
            </div>
            { shouldShowDetails ? <ListSchedulesRowDetails data={detailObj} /> : ""}
            { shouldShowPrescription ? <WritePrescriptionComponent data={detailObj} /> : ""}
            
        </React.Fragment>
    )
}
export default ListSchedulesRowComponent