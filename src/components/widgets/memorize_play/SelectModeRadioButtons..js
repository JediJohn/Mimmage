import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import { setReadMode } from '../../../redux/reducers/readMode.reducer'



const SelectModeRadioButtons = () => {
    const readMode = useSelector((state) => state.readMode.value)
    const dispatch = useDispatch()

    return (
        <FormControl>
            {/* <FormLabel id="select-mode-group">Playback Mode</FormLabel> */}
            <RadioGroup
                row
                aria-labelledby="select-mode-group"
                name="select-mode-radio-buttons"
                value={readMode}
                onChange={(e)=>dispatch(setReadMode(e.target.value))}
            >
                <FormControlLabel labelPlacement='top' 
                                    value="texttospeech"  
                                    control={<Radio sx={{padding:0}} size="small" />} 
                                    label={<p>Read to me</p>}/>
                <FormControlLabel labelPlacement='top' 
                                    value="human" 
                                    control={<Radio sx={{padding:0}} size="small" />} 
                                    label={<p>Record myself</p>}/>
            </RadioGroup>
        </FormControl>
    )
}

export default SelectModeRadioButtons;

