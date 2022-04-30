import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import PlaybackSpeed from '../memorize_play/PlaybackSpeed'
import VolumeSlider from '../memorize_play/VolumeSlider'

import styles from './bar_style.module.scss'
import { setPlayMode } from '../../../redux/reducers/playMode.reducer';

const MemorizePlayModeOverBar = () => {
    const repeatsPerSegment = useSelector((state) => state.repeatsPerSegment.value)
    const currentRepeatNumber = useSelector((state) => state.currentRepeatNumber.value)
    const dispatch = useDispatch()

    const stop = () => {
        window.speechSynthesis.cancel()
        dispatch(setPlayMode('stopped'))
    }
    return (
        <div className={styles.overBar}>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>

                <span>{currentRepeatNumber}/{repeatsPerSegment}</span>
                <PlaybackSpeed></PlaybackSpeed>
                <VolumeSlider></VolumeSlider>
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