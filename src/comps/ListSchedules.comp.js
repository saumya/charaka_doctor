// Component
// ListSchedules.comp.js
//

import React from 'react'

import ListSchedulesRowComponent from './ListSchedulesRow.comp'

const ListSchedulesComponent = props=>{
    return(
        <React.Fragment>
            {/* JSON.stringify(props.list_data) */}

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
export default ListSchedulesComponent