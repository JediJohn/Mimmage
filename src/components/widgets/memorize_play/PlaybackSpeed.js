import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import { setPlaybackSpeed } from '../../../redux/reducers/playbackSpeed.reducer';

const _SPEED_RANGE = [.5, .75, 1, 1.25, 1.5, 1.75, 2.0, 2.5, 3]

const PlaybackSpeed = () => {
    const playbackSpeed = useSelector((state) => state.playbackSpeed.value)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(setPlaybackSpeed(event.target.value));
    };

    return (
        <Box>
            <FormControl fullWidth variant="standard" style={{flexDirection:'row'}}>
                
                <SlowMotionVideoIcon style={{alignSelf:'center', marginRight:'.2rem', color:"black"}} />
                <Select
                    labelId="playback-speed-label"
                    id="playback-speed"
                    value={playbackSpeed}
                    label="Repeats per segment"
                    onChange={handleChange}
                >
                    {_SPEED_RANGE.map(i => <MenuItem key={i} value={i}>{i}x</MenuItem>)} {/*{i===25?"(recommended)":""}*/}
                </Select>
            </FormControl>
        </Box>
    );
}

export default PlaybackSpeed;