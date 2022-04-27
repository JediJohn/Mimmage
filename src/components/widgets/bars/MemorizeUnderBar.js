import { useDispatch } from "react-redux";

import { Button } from '@mui/material';


import { prevStep } from '../../../redux/reducers/activeStep.reducer'

import styles from './bar_style.module.scss'
import StageStepper from './StageStepper';


const MemorizeUnderBar = () => {
    const dispatch = useDispatch()
    return (
        <div  className={styles.underNavButtons}>
            <Button variant="outlined" color="primary" onClick={()=>dispatch(prevStep())}>{'< Choose Segments'}</Button>
            <StageStepper></StageStepper>
            <Button variant="contained" disabled>Save</Button>
        </div>
    )
}

export default MemorizeUnderBar