import React from 'react'
import {Card,CardActionArea, Typography} from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from "react-router-dom";


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

 
function SearchPageCards({title,url, setPlant}) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    setPlant(2);
    navigate("/plantdetail");
  };
    return(
        <>
        <div styles={{background: '#518273'}} onClick={handleButtonClick}>
        <Card sx={styles.root}>
        <CardActionArea sx={{justifyContent: 'flex-start', height:CARD_HEIGHT}}
        onClick={handleButtonClick}>
        <div style={{display: 'flex', flexDirection: 'row', padding: '20px 0px 0px 10px'}}>

        <div style={{width: '30%', height: CARD_HEIGHT, marginTop:15}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
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