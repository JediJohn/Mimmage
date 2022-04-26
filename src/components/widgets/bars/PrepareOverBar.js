import { Button } from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';


import styles from './bar_style.module.scss'


const PrepareOverBar = () => {
    const resetSectionSelections = () => {
        window.location.reload(false)
    }
    return (
        <div className={styles.overBar}>
            <span className={styles.segmentsTitle}><h3>Segments</h3></span>
            <span className={styles.verticalLineSpacing}></span>
            <span className={styles.textSectionTitle}>
                <h3>Text to Memorize</h3>
                <Button
                    color="error"
                    variant='outlined'
                    className={styles.barButton}
                    onClick={() => resetSectionSelections()}>Reset</Button>
            </span>
        </div>
    )
}

export default PrepareOverBar