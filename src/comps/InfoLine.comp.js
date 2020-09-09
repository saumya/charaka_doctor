import React from 'react'

import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const InfoLineComp = (props)=>(
    <Box>
        <Typography variant="body2" component="span">{props.label}</Typography>
        <Typography variant="body2" component="span"> - </Typography>
        <Typography variant="body1" component="span" style={{fontWeight:'bold'}}>{props.value}</Typography>
    </Box>
)

export default InfoLineComp