import { useDispatch, useSelector } from "react-redux";

import { Button } from '@mui/material';
import { nextStep } from '../../../redux/reducers/activeStep.reducer'

import styles from './bar_style.module.scss'
import StageStepper from './StageStepper';


const InputTextUnderBar = () => {
    const inputTitle = useSelector((state) => state.inputText.title)
    const inputText = useSelector((state) => state.inputText.text)
    const dispatch = useDispatch()
    return (
        <div  className={styles.underNavButtons}>
            <Button variant="outlined" onClick={()=>window.location.reload(false)} >Clear</Button>
            <StageStepper></StageStepper>
            <Button 
                variant="contained" 
                disabled={inputTitle==="" || inputText===""}
                color="primary" onClick={()=>dispatch(nextStep())}>{'Begin >'}</Button>
        </div>
    )
}

export default InputTextUnderBar