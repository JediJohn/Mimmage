import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import RepeatsPerSegment from '../memorize_play/RepeatsPerSegment';
import PlaybackSpeed from '../memorize_play/PlaybackSpeed'

import styles from './bar_style.module.scss'
import { setPlayMode } from '../../../redux/reducers/playMode.reducer';

const MemorizePlayModeOverBar = () => {
    const repeatsPerSegment = useSelector((state)=>state.repeatsPerSegment.value)
    const playMode = useSelector((state) => state.playMode.value)
    const dispatch = useDispatch()
    return (
        <div className={styles.overBar}>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>
                
                <span>{3}/{repeatsPerSegment}</span>
                <PlaybackSpeed></PlaybackSpeed>
                <span>
                    <IconButton onClick={()=>dispatch(setPlayMode('stopped'))} aria-label="stop">
                        <StopIcon style={{color:"red"}} />
                    </IconButton>
                    <IconButton disabled aria-label="play">
                        <PlayArrowIcon style={{color:"green"}} />
                    </IconButton>
                </span>
                    
            </span>
            
        </div>
    )
}

export default MemorizePlayModeOverBar