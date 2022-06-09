import TextField from '@mui/material/TextField';
import InputTextArea from '../widgets/InputTextArea';
import InputTextUnderBar from "../widgets/bars/InputTextUnderBar";
import StackedLayout from '../layouts/StackedLayout';
import { setInputTitle } from '../../redux/reducers/InputText.reducer';
import { useDispatch, useSelector } from 'react-redux';

import styles from "./view_style.module.scss"

const TextInputView = () => {
    const dispatch = useDispatch()
    const inputTitle = useSelector((state) => state.inputText.title)

    return (
        <div className={styles.createInputStack}>
            <StackedLayout
                OverBar={TextField}
                overBarProps={{ label:"Title", 
                                value:inputTitle,
                                onChange:(e) => dispatch(setInputTitle(e.target.value))
                            }}
                MidSection={InputTextArea}
                UnderBar={InputTextUnderBar}/>
        </div>
    )
}

export default TextInputView;
