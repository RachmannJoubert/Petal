import React from 'react'
import PlantCard from './PlantCard';
import SwipeableViews from 'react-swipeable-views';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import {useTheme } from '@mui/material/styles';

const plantCardData = [
  {
    title: "Plant 1",
    description: "Planty plant plant",
    url: "yourUrl",
    key: 0
  },
  {
    title: "Plant 2",
    description: "Planty plant plant",
    url: "yourUrl",
    key: 1
  },
  {
    title: "Plant3",
    description: "Planty plant plant",
    url: "yourUrl",
    key: 2
  }
];

  function SwipeableCards({activeStep, setActiveStep}) {
    const handleStepChange = (step) => {
      setActiveStep(step);
    };

    return (
        <SwipeableViews
          style={{padding: 38}}
          axis="x"
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {plantCardData.map(plant => (
              <PlantCard
                  key={plant.key}
                  title={plant.title}
                  description={plant.description}
                  url={plant.url}
              />
          ))}
        </SwipeableViews>

    );
}

function SwipeButtons ({activeStep, setActiveStep}) {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const maxSteps = plantCardData.length

  return (
    <MobileStepper
      dotActive={{color:"green"}}
      sx={(theme) => ({
        marginTop:-7,
        "& .MuiMobileStepper-dotActive": {
            backgroundColor: 'grey'
          },
      })
    }
      steps={maxSteps}
      position="static"
      activeStep={activeStep}
      nextButton={
        
      <Button
        disableRipple="true"
        type="submit"
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        >
        <img src={require("../styles/Group 55.png")}/>
      </Button>
      
    }
      backButton={
        <Button 
        disableRipple="true"
        size="small" 
        onClick={handleBack} 
        disabled={activeStep === 0}
        pointerEvents='none'
        >
        <div style={{transform:"rotate(180deg)", transform:"scaleX(-1)"}}>       
        <img 
        src={require("../styles/Group 55.png")}
        />
        </div>
        
        </Button>
      }
    />
  )
}

export default function Carousel() {
  const [activeStep, setActiveStep] = React.useState(0);
  console.log('Carousel:', activeStep);
  
  return (
    <>
      <SwipeableCards
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
      <SwipeButtons
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </>
  )
}
