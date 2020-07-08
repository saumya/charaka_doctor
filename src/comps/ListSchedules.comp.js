// Component
// ListSchedules.comp.js
//

import React from 'react'

import ListSchedulesRowComponent from './ListSchedulesRow.comp'

const ListSchedulesComponent = props=>{
    return(
        <React.Fragment>
            {/* JSON.stringify(props.list_data) */}
            {
                props.list_data.map( oneRow=>{
                    return <ListSchedulesRowComponent key={oneRow.id} rowData={oneRow} />
                } )
            }

        
        </React.Fragment>
    )
}
export default ListSchedulesComponent