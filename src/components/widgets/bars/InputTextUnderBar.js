import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom"

import { Button } from '@mui/material';
import { nextStep } from '../../../redux/reducers/activeStep.reducer'

import styles from './bar_style.module.scss'
import StageStepper from './StageStepper';


const InputTextUnderBar = () => {
    const inputTitle = useSelector((state) => state.inputText.title)
    const inputText = useSelector((state) => state.inputText.text)
    const navigation = useNavigate()
    const dispatch = useDispatch()
    return (
        <div  className={styles.underNavButtons}>
            <Button variant="outlined" onClick={()=>window.location.reload(false)} >Clear</Button>
            <Button 
                variant="contained" 
                disabled={inputTitle==="" || inputText===""}
                color="primary" onClick={()=>{
                    navigation("/prepare")
                }}>Create</Button>
        </div>
    )
}

export default InputTextUnderBar