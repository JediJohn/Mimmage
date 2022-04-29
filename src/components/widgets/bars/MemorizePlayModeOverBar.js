import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';

import PlaybackSpeed from '../memorize_play/PlaybackSpeed'

import styles from './bar_style.module.scss'
import { setPlayMode } from '../../../redux/reducers/playMode.reducer';
import { setVolume } from '../../../redux/reducers/volume.reducer'

const MemorizePlayModeOverBar = () => {
    const repeatsPerSegment = useSelector((state) => state.repeatsPerSegment.value)
    const volume = useSelector((state) => state.volume.value)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        dispatch(setVolume(e.target.value))
    }

    const stop = () => {
        window.speechSynthesis.cancel()
        dispatch(setPlayMode('stopped'))
    }
    return (
        <div className={styles.overBar}>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>

                <span>{3}/{repeatsPerSegment}</span>
                <PlaybackSpeed></PlaybackSpeed>
                <Box sx={{ width: 150 }}>
                    <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
                        <VolumeDownIcon />
                        <Slider aria-label="Volume" size="small" value={volume} onChange={handleChange}/>
                        <VolumeUpIcon />
                    </Stack>
                </Box>
                <span>
                    <IconButton onClick={() => stop()} aria-label="stop">
                        <StopIcon style={{ color: "red" }} />
                    </IconButton>
                    <IconButton disabled aria-label="play">
                        <PlayArrowIcon style={{ color: "gray" }} />
                    </IconButton>
                </span>
            </span>
        </div>
    )
}

export default MemorizePlayModeOverBar