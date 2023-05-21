import React from 'react'
import { Typography } from '@mui/material';

const styles = {
    root: {
        fontSize: 24, 
        fontWeight: 'bold', 
        fontColor: '#424242', 
        opacity: '80%',
        position: 'relative',
        right: '60px',
        marginTop: 3,
        marginBottom: -3, 
    }
}

function DashBody() {
    return (
        <Typography sx={styles.root}>  Your Plant Library</Typography>
    );
}

export default DashBody