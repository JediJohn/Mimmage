

import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Stack from '@mui/material/Stack';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { setVolume } from '../../../redux/reducers/volume.reducer';


const VolumeSlider = () => {
    const volume = useSelector((state) => state.volume.value)
    const dispatch = useDispatch()

    const handleChange = (event) => {
        dispatch(setVolume(event.target.value));
    };

    return (
        <Box sx={{ width: 150 }}>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                <VolumeDownIcon />
                <Slider aria-label="Volume" size="small" value={volume} onChange={handleChange} />
                <VolumeUpIcon />
            </Stack>
        </Box>
    );
}

export default VolumeSlider;