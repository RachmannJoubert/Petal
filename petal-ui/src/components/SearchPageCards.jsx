import React from 'react'
import { Card,CardActionArea,Container,Typography} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';



const CARD_HEIGHT = 285;

const styles = {
    root: {
        borderRadius: '15px 0px 0px 15px',
        display: 'flex',
        marginTop: 2,
        flexDirection: 'column',
        height: CARD_HEIGHT,
        marginLeft: 4,
    },

}

function SearchPageCards({title, description,url}) {
    return(
        <>
        <div styles={{background: '#518273'}}>
        <Card sx={styles.root}>
        <CardActionArea sx={{justifyContent: 'flex-start'}}>

        <div style={{display: 'flex', flexDirection: 'row', padding: '20px 0px 0px 20px'}}>

        <div style={{width: '30%', height: CARD_HEIGHT, marginTop:25}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
                {description}
            </Typography>
        </div>
        <div style={{justifyContent: 'flex-end', width: '70%'}}>
          <CardMedia
            sx={{borderRadius: '16px 0px 0px 16px'}}
            component="img"
            width={100}
            image= {url}
            alt="plant"
          />
          </div>

          </div>
        </CardActionArea>
      </Card>
      </div>
      </>
    )
}

export default SearchPageCards