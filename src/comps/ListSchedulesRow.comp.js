// Component
// ListSchedulesRow.comp.js

import React, {useState} from 'react'

import Button from '@material-ui/core/Button'

import ListSchedulesRowDetails from './ListSchedulesRowDetails.comp'


const ListSchedulesRowComponent = (props)=>{ 

    let [shouldShowDetails, setOpenDetails] = useState(false)
    let [detailObj, setDetailObj] = useState({})

    const handleClose = ()=>{
        setOpenDetails(false)
    }
    const onDetails = (item)=>{
        console.log(item)
        setDetailObj(item)
        setOpenDetails( !shouldShowDetails )
    }
    
    return(
        <React.Fragment> 
            {/* JSON.stringify(props.rowData) */} 
            
            <div style={{height: "44px", margin:"4px"}}>
                    <span style={{width: "200px"}}>{props.rowData.on_date}</span>  | 
                    <span style={{width: "200px"}}>{ props.rowData.is_morning ? "Morning" : "Evening" }</span> 
                
                <Button variant="outlined" color="primary" onClick={()=>{ onDetails(props.rowData) }}> Details </Button>
            </div>
            { shouldShowDetails ? <ListSchedulesRowDetails data={detailObj} /> : ""}
            
        </React.Fragment>
    )
}
export default ListSchedulesRowComponent