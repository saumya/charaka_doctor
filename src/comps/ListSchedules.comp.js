// Component
// ListSchedules.comp.js
//

import React, {useState} from 'react'
//

/*
import ListSchedulesRowComponent from './ListSchedulesRow.comp'

const ListSchedulesComponent = props=>{
    return(
        <React.Fragment>
            { JSON.stringify(props.list_data) }

            <ul>
            {
                props.list_data.map( oneRow=>{
                    return <li key={oneRow.id}><ListSchedulesRowComponent key={oneRow.id} rowData={oneRow} /></li>
                } )
            }
            </ul>

        
        </React.Fragment>
    )
}
*/

import List from '@material-ui/core/List'
import Dialog from '@material-ui/core/Dialog'
import Slide from '@material-ui/core/Slide'

import ListSchedulesRow2Component from './ListSchedulesRow2.comp'
import ScheduleDetailView from './ScheduleDetailView.comp'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});

const ListSchedulesComponent = props=>{
    const [open, setOpen] = useState(false)
    const [detailsObj, setDetailsObj] = useState({})
    const handleClose = ()=>setOpen(false)
    const onDetails = (detailsObj)=>{
        setDetailsObj( detailsObj )
        setOpen(true)
    }
    return(
        <React.Fragment>
            <Dialog fullScreen open={open} TransitionComponent={Transition}>
                <ScheduleDetailView handleClose={handleClose} detailsObj={detailsObj} />
            </Dialog>
            <List component="nav">
                {
                    props.list_data.map( singleRowData=><ListSchedulesRow2Component key={singleRowData.id} rowData={singleRowData} onDetailsClick={onDetails} /> )
                }
            </List> 
        </React.Fragment>
    )
}



//
export default ListSchedulesComponent