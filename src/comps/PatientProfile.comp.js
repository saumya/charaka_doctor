// 
// @version: 1.0.0
//
import React from 'react'

import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

import InfoLineComp from './InfoLine.comp'

const PatientProfileComp = (props)=>{
    const onClose = ()=>{
        console.log('onClose')
    }
    return(
    <React.Fragment>
        <div style={{ marginTop:"1em"}} />
        <Box>
        {   
            ( props.profile.id 
            ? 
            <div style={{ background:"#f7f7f7"}}>
                <CardContent>
                    {/* JSON.stringify(props.profile) */}
                    
                    <div style={{ fontSize:"1.4em", color:"#9e9e9e" }}>Body Basics</div>
                    <InfoLineComp label="Gender" value={props.profile.gender} />
                    <InfoLineComp label="Age" value={props.profile.age} />
                    <InfoLineComp label="Height" value={props.profile.height} />
                    <InfoLineComp label="Weight" value={props.profile.weight} />
                    <InfoLineComp label="Blood Group" value={props.profile.bloodGroup} />

                    <div style={{ fontSize:"1.4em", color:"#9e9e9e" }}>Contact Details</div>
                    <InfoLineComp label="Id" value={props.profile.id} />
                    <InfoLineComp label="Name" value={props.profile.name} />
                    <InfoLineComp label="Phone" value={props.profile.phone} />
                    <InfoLineComp label="Email" value={props.profile.email} />
                    <InfoLineComp label="Address" value={props.profile.address} />
                    
                </CardContent>
                {/*
                <CardActions>
                    <Button color="secondary" onClick={onClose}> Close </Button>
                </CardActions>
                */}
                
            </div> 
            : null 
            ) 
        }
        </Box>
    </React.Fragment>
    )
}

export default PatientProfileComp