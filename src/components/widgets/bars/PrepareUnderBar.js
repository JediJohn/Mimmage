import { useDispatch, useSelector } from "react-redux";

import { Button } from '@mui/material';

import { prevStep } from '../../../redux/reducers/activeStep.reducer'
import { nextStep } from '../../../redux/reducers/activeStep.reducer'

import styles from './bar_style.module.scss'
import StageStepper from './StageStepper';


const PrepareUnderBar = () => {
    const dispatch = useDispatch()
    const textDivisionsCompleted = useSelector((state) => state.textDivisions.completed)
    return (
        <div className={styles.underNavButtons}>
            <Button variant="outlined" color="primary" onClick={()=>dispatch(prevStep())}>{'< Choose Text'}</Button>
            <StageStepper></StageStepper>
            <Button variant="contained" 
                disabled={!textDivisionsCompleted} 
                onClick={()=>dispatch(nextStep())}>{'Memorize >'}</Button>
        </div>
    )
}

export default PrepareUnderBar