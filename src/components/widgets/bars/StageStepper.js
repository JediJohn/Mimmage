import { useSelector } from "react-redux";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const StageStepper = () => {
    const activeStep = useSelector((state) => state.activeStep.value)
    return (
        
        <Stepper activeStep={activeStep}>
            <Step key={0}>
                <StepLabel>Input Text</StepLabel>
            </Step>
            <Step key={1}>
                <StepLabel>Choose Segments</StepLabel>
            </Step>
            {/* <Step key={2}>
                <StepLabel>Memorize</StepLabel>
            </Step> */}
        </Stepper>
    )
}

export default StageStepper