import TextField from '@mui/material/TextField';
import InputTextArea from '../widgets/InputTextArea';
import InputTextUnderBar from "../widgets/bars/InputTextUnderBar";
import StackedLayout from '../layouts/StackedLayout';
import { setInputTitle } from '../../redux/reducers/InputText.reducer';
import { useDispatch } from 'react-redux';

const TextInputView = () => {
    const dispatch = useDispatch()

    return (
        <StackedLayout
            OverBar={TextField}
            overBarProps={{ label:"Title", 
                            variant:"standard",
                            onChange:(e) => dispatch(setInputTitle(e.target.value))
                        }}
            MidSection={InputTextArea}
            UnderBar={InputTextUnderBar}/>
    )
}

export default TextInputView;
