import { Button } from '@mui/material';

import styles from './bar_style.module.scss'

const MemorizeOverBar = () => {
    const resetSectionSelections = () => {
        window.location.reload(false)
    }
    return (
        <div className={styles.overBar}>
            <span className={styles.segmentsTitle}><h3>Segments</h3></span>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>
                <h3>Text to Memorize</h3>
            </span>
        </div>
    )
}

export default MemorizeOverBar