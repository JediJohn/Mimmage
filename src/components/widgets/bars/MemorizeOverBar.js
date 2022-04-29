import { useDispatch, useSelector } from 'react-redux';

import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import RepeatsPerSegment from '../memorize_play/RepeatsPerSegment';
import PlaybackSpeed from '../memorize_play/PlaybackSpeed'
import VolumeSlider from '../memorize_play/VolumeSlider';

import styles from './bar_style.module.scss'
import { setPlayMode } from '../../../redux/reducers/playMode.reducer';
import { setActivePlaySegment } from '../../../redux/reducers/activePlaySegment.reducer';

const MemorizeOverBar = () => {
    const readMode = useSelector((state) => state.readMode.value)
    const playMode = useSelector((state) => state.playMode.value)
    const dispatch = useDispatch()
    return (
        <div className={styles.overBar}>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>

                <RepeatsPerSegment></RepeatsPerSegment>
                <PlaybackSpeed></PlaybackSpeed>
                <VolumeSlider></VolumeSlider>
                <span>
                    <IconButton disabled={readMode === "texttospeech"}
                        aria-label="record"
                        style={{ color: readMode === "human" ? "red" : "gray" }}
                        onClick={() => dispatch(setPlayMode('recording'))}>
                        <FiberManualRecordIcon />
                    </IconButton>
                    <IconButton disabled aria-label="stop">
                        <StopIcon style={{ color: "gray" }} />
                    </IconButton>
                    <IconButton onClick={() => {
                        dispatch(setPlayMode('playing'))
                        dispatch(setActivePlaySegment(0))
                    }}
                        aria-label="play">
                        <PlayArrowIcon style={{ color: "green" }} />
                    </IconButton>
                </span>

            </span>

        </div>
    )
}

export default MemorizeOverBar