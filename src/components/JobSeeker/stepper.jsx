import * as React from 'react';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';

const steps = ['Questions', 'Contact Info'];

export default function IndicatorStepper({callback , num}) {
  const [activeStep, setActiveStep] = React.useState(num-1);
  return (
    <Stepper sx={{ width: '100%' }}>
      {steps.map((step, index) => (
        <Step
          onClick = {()=> (
            index == 1 ? callback(2) : callback(1)
          )}
          key={step}
          indicator={
            <StepIndicator
              variant={activeStep <= index ? 'soft' : 'solid'}
              color={activeStep < index ? 'neutral' : 'primary'}
            >
              {activeStep <= index ? index + 1 : <Check />}
            </StepIndicator>
          }
          sx={{
            '&::after': {
              ...(activeStep > index &&
                index !== 2 && { bgcolor: 'primary.solidBg' }),
            },
          }}
        >
          <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
