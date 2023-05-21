import React from 'react'
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

const styles = {
    root: {
        width: '300px',
        height: '300px',
        justifyContent: 'center', 
        display: 'flex',
        flexGrow: 1,
        position: 'relative',
        flexDirection: 'column',
        borderRadius: 4,
        marginRight: -24,
        filter: 'drop-shadow(0 0 0.27rem lightgrey);',
        marginLeft:1.8,
        marginTop:1,
        marginBottom:1,
    },

}

export default function PlantCard({ title, description, url }) {
    return (
        <Card sx={styles.root}>
            <CardMedia
                sx={{}}
                image={url}
                title="Plant Card"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}

