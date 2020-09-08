// 
// @version: 1.0.0
//
import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'

const PatientProfileComp = (props)=>{
    const onClose = ()=>{
        console.log('onClose')
    }
    return(
    <React.Fragment>
        <div style={{ marginTop:"1em"}} />
        <Card>
        {   
            ( props.profile.id 
            ? 
            <div style={{ background:"#f7f7f7"}}>
                <CardContent>
                    {/* JSON.stringify(props.profile) */}
                    
                    <div style={{ fontSize:"1.4em" }}>Body Basics</div>
                    <div>Gender - <span style={{fontWeight:"bold"}}>{props.profile.gender}</span></div>
                    <div>Age - <span style={{fontWeight:"bold"}}>{props.profile.age}</span></div>
                    <div>Height - <span style={{fontWeight:"bold"}}>{props.profile.height}</span></div>
                    <div>Weight - <span style={{fontWeight:"bold"}}>{props.profile.weight}</span></div>
                    <div>Blood Group - <span style={{fontWeight:"bold"}}>{props.profile.bloodGroup}</span></div>

                    <div style={{ fontSize:"1.4em" }}>Contact Details</div>
                    <div>id - <span style={{fontWeight:"bold"}}>{props.profile.id}</span></div>
                    <div>Name - <span style={{fontWeight:"bold"}}>{props.profile.name}</span></div>
                    <div>Phone - <span style={{fontWeight:"bold"}}>{props.profile.phone}</span></div>
                    <div>Email - <span style={{fontWeight:"bold"}}>{props.profile.email}</span></div>
                    <div>Address - <span style={{fontWeight:"bold"}}>{props.profile.address}</span></div>
                    
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
        </Card>
    </React.Fragment>
    )
}

export default PatientProfileComp