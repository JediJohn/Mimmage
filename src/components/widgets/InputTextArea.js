import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {setInputText} from '../../redux/reducers/InputText.reducer'
import { setSegmentColors } from '../../redux/reducers/segmentColors.reducer';
import { setTextDivisionsArray, setTextDivisionsCompleted } from '../../redux/reducers/textDivisionsSlice.reducer';
import styles from './widget_style.module.scss'


const InputTextArea = () => {
    const dispatch = useDispatch()
    const inputText = useSelector((state) => state.inputText.text)

    const textChange = (e) => {
        dispatch(setInputText(e.target.value))
        dispatch(setTextDivisionsArray([]))
        dispatch(setTextDivisionsCompleted(false))
        dispatch(setSegmentColors([]))
    }
    return (
        <div className={styles.textAreaContainer}>
            <TextField
                label="Text to Memorize"
                placeholder="Paste in text to memorize..."
                multiline
                minRows={10} //TODO: Dynamically get height based updon window
                maxRows={18}
                className={styles.inputTextArea}
                value={inputText}
                onChange={(e)=>textChange(e)}
            />
        </div>
    )
}

export default InputTextArea;

