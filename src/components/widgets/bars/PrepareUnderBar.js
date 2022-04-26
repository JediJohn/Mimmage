
import { Button } from '@mui/material';

import styles from './bar_style.module.scss'


const PrepareUnderBar = () => {
    return (
        <div className={styles.underNavButtons}>
            <Button variant="outlined" color="primary">{'< Choose Text'}</Button>
            <Button variant="contained">{'Memorize >'}</Button>
        </div>
    )
}

export default PrepareUnderBar