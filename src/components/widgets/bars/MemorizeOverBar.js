import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import RepeatsPerSegment from '../memorize_play/RepeatsPerSegment';
import PlaybackSpeed from '../memorize_play/PlaybackSpeed'
import SelectModeRadioButtons from '../memorize_play/SelectModeRadioButtons.';

import styles from './bar_style.module.scss'
import { setPlayMode } from '../../../redux/reducers/playMode.reducer';
import { setActivePlaySegment } from '../../../redux/reducers/activePlaySegment.reducer';

const MemorizeOverBar = () => {
    const readMode = useSelector((state) => state.readMode.value)
    const playMode = useSelector((state) => state.playMode.value)
    const dispatch = useDispatch()
    return (
        <div className={styles.overBar}>
            {/* <span className={styles.segmentsTitle}><h3>Segments</h3></span> */}
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>
                {/* <h3>Text to Memorize</h3> */}

                <RepeatsPerSegment></RepeatsPerSegment>
                <PlaybackSpeed></PlaybackSpeed>
                {/* <SelectModeRadioButtons></SelectModeRadioButtons> */}
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